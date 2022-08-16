import {database} from "../db";

export async function sessionCreate(createSessionDto) {

    const a = await database('sessions').insert(createSessionDto);
    return a
}

export async function sessionGet(sessionForeignId) {
    return database('sessions').where('id', sessionForeignId)
}