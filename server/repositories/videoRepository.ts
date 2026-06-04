import db from '../database/db'
import type {
  EpisodeEntity,
  VideoEntity,
} from '../database/schema'

// Export db for use in admin endpoints if needed
export { db }

export function upsertVideo(video: VideoEntity) {
  const stmt = db.prepare(`
    INSERT INTO videos (
      source,
      vod_id,
      title,
      cover,
      description,
      type,
      year,
      area,
      remark
    )
    VALUES (
      @source,
      @vod_id,
      @title,
      @cover,
      @description,
      @type,
      @year,
      @area,
      @remark
    )
    ON CONFLICT(source, vod_id)
    DO UPDATE SET
      title = excluded.title,
      cover = excluded.cover,
      description = excluded.description,
      type = excluded.type,
      year = excluded.year,
      area = excluded.area,
      remark = excluded.remark,
      updated_at = CURRENT_TIMESTAMP
  `)

  return stmt.run(video)
}

export function createEpisode(episode: EpisodeEntity) {
  const stmt = db.prepare(`
    INSERT INTO episodes (
      video_id,
      line_name,
      episode_name,
      play_url,
      episode_index,
      source_type
    )
    VALUES (
      @video_id,
      @line_name,
      @episode_name,
      @play_url
      ,@episode_index
      ,@source_type
    )
  `)

  return stmt.run(episode)
}

export function replaceEpisodesForVideo(videoId: number, episodes: EpisodeEntity[]) {
  const del = db.prepare(`DELETE FROM episodes WHERE video_id = ?`)
  const insert = db.prepare(`
    INSERT INTO episodes (video_id, line_name, episode_name, play_url, episode_index, source_type)
    VALUES (@video_id, @line_name, @episode_name, @play_url, @episode_index, @source_type)
  `)

  const tx = db.transaction((eps: EpisodeEntity[]) => {
    del.run(videoId)
    for (const ep of eps) {
      insert.run({ ...ep, video_id: videoId })
    }
  })

  return tx(episodes)
}

export function recordPlayHistory(videoId: number | null, episodeId: number | null, playUrl: string, userAgent?: string, referrer?: string) {
  const stmt = db.prepare(`
    INSERT INTO play_history (video_id, episode_id, play_url, user_agent, referrer)
    VALUES (?, ?, ?, ?, ?)
  `)
  return stmt.run(videoId, episodeId, playUrl, userAgent || null, referrer || null)
}

export function searchVideos(keyword: string) {
  const stmt = db.prepare(`
    SELECT *
    FROM videos
    WHERE title LIKE ?
    ORDER BY updated_at DESC
    LIMIT 50
  `)

  return stmt.all(`%${keyword}%`)
}

export function getVideoById(id: number) {
  const stmt = db.prepare(`
    SELECT *
    FROM videos
    WHERE id = ?
  `)

  return stmt.get(id)
}

export function getEpisodes(videoId: number) {
  const stmt = db.prepare(`
    SELECT *
    FROM episodes
    WHERE video_id = ?
    ORDER BY episode_index ASC, id ASC
  `)

  return stmt.all(videoId)
}

export function listVideos(limit = 100) {
  const stmt = db.prepare(`
    SELECT * FROM videos
    ORDER BY updated_at DESC
    LIMIT ?
  `)
  return stmt.all(limit)
}

export function listPlayHistory(limit = 100) {
  const stmt = db.prepare(`
    SELECT * FROM play_history
    ORDER BY played_at DESC
    LIMIT ?
  `)
  return stmt.all(limit)
}
