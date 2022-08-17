import {database} from "../db";

export async function findAll() {
    let users = await database.from('users')
    return users;
}

export async function userCreate(createUserDto) {
    try {
        const i = await database('users').insert(createUserDto, ["id"]);
        return i
    } catch (e) {
        return e;
    }
}

export async function userLogin(username, password) {
    try {
        let user = await database('users')
            .where('username', username)
            .first();

        if (password !== user.password) {
            throw new Error('wrong password');
        }
        return user;
    } catch (e) {
        return e.message;
    }
}
