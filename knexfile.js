module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    useNullAsDefault: true
  },
  seeds : {
    directtory: '/.db/seeds/dev'
  }
};
