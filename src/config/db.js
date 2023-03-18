import pkg from 'pg';
const { Pool } = pkg;


export default function createPool() {
  return new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'measurements',
    password: 'postgres',
    port: '5432',
  });
}
