import mysql, { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

declare global {
  // eslint-disable-next-line no-var
  var _mysqlPool: Pool | undefined;
}

const poolConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root_password',
  database: process.env.DB_NAME || 'project_mvc',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

function createPool(): Pool {
  if (process.env.NODE_ENV === 'production') {
    return mysql.createPool(poolConfig);
  }

  // Prevent multiple pool instances during Next.js Hot Module Replacement in dev
  if (!global._mysqlPool) {
    global._mysqlPool = mysql.createPool(poolConfig);
  }
  return global._mysqlPool;
}

export const pool = createPool();

/**
 * Executes a parameterized SQL query returning rows.
 * Prevents SQL Injection through parameterization.
 */
export async function query<T extends RowDataPacket[]>(
  sql: string,
  params: unknown[] = []
): Promise<T> {
  const [rows] = await pool.query<T>(sql, params as any);
  return rows;
}

/**
 * Executes an INSERT, UPDATE, or DELETE SQL statement.
 * Returns ResultSetHeader containing affectedRows, insertId, etc.
 */
export async function execute(
  sql: string,
  params: unknown[] = []
): Promise<ResultSetHeader> {
  const [result] = await pool.execute<ResultSetHeader>(sql, params as any);
  return result;
}
