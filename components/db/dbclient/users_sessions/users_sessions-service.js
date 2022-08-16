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