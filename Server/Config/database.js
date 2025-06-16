require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon PostgreSQL
  },
});

pool
  .connect()
  .then(() => console.log("PostgreSQL is connected"))
  .catch((err) => console.error("Error connecting to database:", err.message));

module.exports = pool;