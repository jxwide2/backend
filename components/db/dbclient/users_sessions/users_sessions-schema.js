import {database} from "../db";

export function createUsersSessionsTable() {
    database.schema.hasTable('users_sessions').then(function(exists) {
        if (!exists) {
            return database.schema.createTable('users_sessions', function(t) {
                t.increments();
                t.integer('userId');
                t.integer('sessionId');
                t.string('userRole');
                t.timestamps();
            });
        }
    });
}

