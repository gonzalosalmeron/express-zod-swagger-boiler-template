import mysql, { Pool } from 'mysql2/promise'

// Establish connection to database
const localhost: Pool = mysql.createPool({
  host: process.env.LOCALHOST_DB_HOST,
  user: process.env.LOCALHOST_DB_USER,
  password: process.env.LOCALHOST_DB_PASS,
  waitForConnections: true,
  connectionLimit: 30, // max open connections
  maxIdle: 1, // max idle connections
  idleTimeout: 10000, // max idle timeout
  queueLimit: 100, // max connections on queue
})

export { localhost }
