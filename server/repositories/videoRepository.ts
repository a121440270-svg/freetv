import db from '../database/db'
import type {
  EpisodeEntity,
  VideoEntity,
} from '../database/schema'

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
      play_url
    )
    VALUES (
      @video_id,
      @line_name,
      @episode_name,
      @play_url
    )
  `)

  return stmt.run(episode)
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
    ORDER BY id ASC
  `)

  return stmt.all(videoId)
}
