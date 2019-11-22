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
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
