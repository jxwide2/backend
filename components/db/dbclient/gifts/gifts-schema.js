import {database} from "../db";

export function createGiftsTable() {
    database.schema.hasTable('gifts').then(function(exists) {
        if (!exists) {
            return database.schema.createTable('gifts', function(t) {
                t.increments();
                t.integer('senderId');
                t.integer('receiverId');
                t.integer('sessionId');
                t.timestamps();
            });
        }
    });
}

