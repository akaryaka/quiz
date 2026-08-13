import { Pool } from "pg";

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'quiz',
  password: 'admin@123',
  port: 5432,
});