const { db } = require('../db');

async function up() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    );
  `);
}

async function down() {
  await db.query(`
    DROP TABLE IF EXISTS users;
  `);
}

module.exports = { up, down };