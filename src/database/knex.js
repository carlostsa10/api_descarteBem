const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'your_password',
        database: 'descartebem'
    }
});

module.exports = knex;