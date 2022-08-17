import {database} from "../db";
import {
    createRelation,
    getSessionsIdsWhereUserId,
    getUsersIdsFromSession
} from "../users_sessions/users_sessions-service";
import {getUserInfo} from "../users/user-service";

export async function sessionCreate(createSessionDto, creatorId) {
    let session = await database('sessions').insert(createSessionDto, ["id"]);
    await createRelation(creatorId, session[0].id, 'owner');
}

export async function sessionGet(sessionForeignId) {
    return database('sessions').where('id', sessionForeignId)
}

export async function getUsersFromSession(sessionId) {
    let users = [];
    let userIds = await getUsersIdsFromSession(sessionId);
    for (let i = 0; i < userIds.length; i++) {
        let id = +userIds[i].userId;
        let user = await getUserInfo(id);
        users.push(user);
    }
    return users;
}

export async function getSessionsFromUser(userId) {
    let sessions = [];
    let sessionsIds = await getSessionsIdsWhereUserId(userId);
    for (let i = 0; i < sessionsIds.length; i++) {
        let id = +sessionsIds[i].sessionId;
        let session = sessionGet(id);
        sessions.push(session);
    }
    return sessions;
}