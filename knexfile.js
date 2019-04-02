// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './getitdone.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};