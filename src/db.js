import cliente from 'pg'

const { Pool } = cliente;

const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'practicas',
  password: '123',
  port: 5432
});

export {
    pool
};