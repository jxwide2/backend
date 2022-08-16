import {database} from "../db";

export function createUsersTable() {
    database.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            return database.schema.createTable('users', function(t) {
                t.increments();
                t.string('username');
                t.unique(['username']);
                t.string('password');
                t.string('firstname');
                t.string('lastname');
                t.timestamps();
            });
        }
    });
}

export function dropUsersTable() {
    database.schema.dropTable('users')
}
