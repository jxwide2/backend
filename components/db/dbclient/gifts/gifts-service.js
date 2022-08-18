import {database} from "../db";

export async function giftCreate(giftCreateDto) {
    if (!giftCreateDto.hasOwnProperty('senderId')){
        throw new Error('Wrong data')
    }
    return database('gifts').insert(giftCreateDto);
}