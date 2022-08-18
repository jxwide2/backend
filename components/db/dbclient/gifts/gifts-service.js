import {database} from "../db";

export async function giftCreate(giftCreateDto) {
    if (!giftCreateDto.hasOwnProperty('senderId')){
        throw new Error('Wrong data')
    }
    return database('gifts').insert(giftCreateDto);
}

export async function giftDelete(giftId) {
    return database('gifts')
        .where('id', giftId)
        .del();
}

export async function findGiftById(giftId) {
    return database('gifts')
        .where('id', giftId)
        .first();
}

export async function findGiftBySender(senderId) {
    return database('gifts')
        .where('senderId', senderId)
}

export async function findGiftByReceiver(receiverId) {
    return database('gifts')
        .where('receiverId', receiverId)
}

export async function findGiftsBySession(sessionId) {
    return database('gifts')
        .where('sessionId', sessionId)
}