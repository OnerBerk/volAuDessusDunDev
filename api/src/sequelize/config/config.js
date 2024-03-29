module.exports = {
  development: {
    username: process.env['DEV_DATABASE_USERNAME '],
    password: process.env['DEV_DATABASE_PASSWORD '],
    database: process.env['DEV_DATABASE_NAME '],
    host: process.env['DEV_DATABASE_HOST '],
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
