import {database} from "./db";

export async function findAll() {
    return database('users');
}

export async function create(createUserDto) {
    let candidate = database()
        .select('id')
        .from('users')
        .where('username', createUserDto.username)
    if (candidate) throw new Error('user already exists')
    return database('users').insert(createUserDto);
}

export async function login(username, password) {
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

