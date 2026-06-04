import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const dataDir = path.resolve(process.cwd(), 'data')

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const db = new Database(path.join(dataDir, 'freetv.db'))

db.pragma('journal_mode = WAL')

db.exec(`
CREATE TABLE IF NOT EXISTS videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source TEXT NOT NULL,
  vod_id TEXT NOT NULL,
  title TEXT NOT NULL,
  cover TEXT,
  description TEXT,
  type TEXT,
  year TEXT,
  area TEXT,
  remark TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_video_unique
ON videos(source, vod_id);

CREATE TABLE IF NOT EXISTS episodes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  video_id INTEGER NOT NULL,
  line_name TEXT,
  episode_name TEXT NOT NULL,
  play_url TEXT NOT NULL,
  episode_index INTEGER,
  source_type TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_episode_video
ON episodes(video_id);

CREATE TABLE IF NOT EXISTS providers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  api_url TEXT NOT NULL,
  enabled INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sync_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  provider_name TEXT NOT NULL,
  status TEXT NOT NULL,
  message TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS play_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  video_id INTEGER,
  episode_id INTEGER,
  play_url TEXT NOT NULL,
  played_at TEXT DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  referrer TEXT
);
`)

export default db
