'use strict';

const {
  DB_NAME = 'control_access',
  DB_USER = 'postgres',
  DB_PASS = '1234',
  DB_HOST = 'localhost',
  DB_PORT = 5432,
} = process.env;

module.exports = {
  db: {
    host: DB_HOST,
    port: DB_PORT,
    url: '',
    database: DB_NAME,
    password: DB_PASS,
    name: DB_NAME,
    user: DB_USER,
    connector: 'postgresql',
  },
};
