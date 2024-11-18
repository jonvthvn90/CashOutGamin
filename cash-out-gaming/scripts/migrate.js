const { db } = require('../db');

async function migrate() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS games (
      id INT PRIMARY KEY,
      name VARCHAR(255),
      description VARCHAR(255),
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);
}

migrate();