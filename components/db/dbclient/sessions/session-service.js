import {database} from "../db";

export async function sessionCreate(createSessionDto) {
    // let session = database()
    //     .select('id')
    //     .from('sessions')
    //     .where('name', createSessionDto.name)
    // if (session) throw new Error('session already exists')
    return database('sessions').insert(createSessionDto);
}
