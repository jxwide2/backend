import {database} from "../db";

export async function findAll() {
    return database('users');
}

export async function userCreate(createUserDto) {
    let candidate = database()
        .select('id')
        .from('users')
        .where('username', createUserDto.username)
    if (candidate) throw new Error('users already exists')
    return database('users').insert(createUserDto);
}

export async function userLogin(username, password) {
    let user = database('users')
        .where('username', username);
    if (password !== user.password) {
        throw new Error('wrong password');
    }
    return user;
}
// export async function test() {
//     let candidate = database()
//         .select('id')
//         .from('users')
//         .where('username', '273')
//     console.log(!!candidate)
//     console.log(candidate)
// }

