import Database from 'better-sqlite3';
const DB_PATH = "./polls.db"

const db = new Database(DB_PATH, { verbose: console.log });

export function getInitialPolls() {
  const sql = `
  SELECT question, option_text, votes FROM polls
JOIN options
	ON polls.id = options.poll_id
WHERE polls.id = 1
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.get();
  return rows ;
}

// console.log(getInitialPolls())
console.log(Database)