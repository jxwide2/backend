import {database} from "../db";

export function createSessionsTable() {
    database.schema.hasTable('sessions').then(function(exists) {
        if (!exists) {
            return database.schema.createTable('users', function(t) {
                t.increments();
                t.string('name');
                t.integer('membersCount');
                t.integer('money');
                t.datetime('dateOfEnd');
                t.timestamps();
            });
        }
    });
}

