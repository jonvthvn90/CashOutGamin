const { db } = require('../db');

async function up() {
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

async function down() {
  await db.query(`
    DROP TABLE IF EXISTS games;
  `);
}

module.exports = { up, down };