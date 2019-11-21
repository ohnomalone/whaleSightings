module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/whalewatchers',
    migrations: {
     directory: './db/migrations'
   },
    useNullAsDefault: true
  },
  seeds : {
    directtory: '/.db/seeds/dev'
  }
};
