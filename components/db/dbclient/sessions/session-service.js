import {database} from "../db";

export async function sessionCreate(createSessionDto) {
    return database('sessions').insert(createSessionDto);
}

export async function sessionGet(sessionForeignId) {
    return database('sessions').where('id', sessionForeignId)
}