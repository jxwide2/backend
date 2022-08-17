import {database} from "../db";

export async function createRelation(userId, sessionId, role = "member") {
    // await database('users_sessions').insert({
    //     userId,
    //     sessionId,
    //     userRole: role
    // });

    await database.transaction(async (trx) => {
        await trx('users_sessions').insert({
            userId,
            sessionId,
            userRole: role
        })
    })

    return database('users_sessions')
        .where('userId', userId)
        .where('sessionId', sessionId)
        .where('userRole', role)
        .first();
}

export async function getUsersIdsFromSession(sessionId) {
    return database('users_sessions')
        .where('sessionId', sessionId)
        .select('userId')
}

export async function getSessionsIdsWhereUserId(userId) {
    return database('users_sessions')
        .where('userId', userId)
        .select('sessionId')
}