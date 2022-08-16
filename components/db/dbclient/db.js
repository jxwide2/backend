import knex from 'knex'

export const database = knex({
    client: 'pg',
    searchPath: ['public'],
    connection: {
        host : '95.216.148.15',
        port : 5432,
        user : 'red',
        password : 'red',
        database : 'red'
    }
});