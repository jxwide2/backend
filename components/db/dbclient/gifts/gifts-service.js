import {database} from "../db";

export async function giftCreate(giftCreateDto) {
    // giftCreateDto:
    //     - senderId
    //     - receiverId
    //     - sessionId
    if (!giftCreateDto.hasOwnProperty('senderId')){
        throw new Error('Wrong data');
    }
    return database('gifts').insert(giftCreateDto);
}

export async function giftDelete(giftId) {
    return database('gifts')
        .where('id', giftId)
        .del();
}

export async function findGiftById(giftId) {
    try {
        return database('gifts')
            .where('id', giftId)
            .first();
    } catch {
        return {
            message: "not found error"
        }
    }
}

export async function findGiftBySender(senderId) {
    try {
        return database('gifts')
            .where('senderId', senderId)
    } catch {
        return {
            message: "not found error"
        }
    }
}

export async function findGiftByReceiver(receiverId) {
    try {
        return database('gifts')
            .where('receiverId', receiverId)
    } catch {
        return {
            message: "not found error"
        }
    }
}

export async function findGiftsBySession(sessionId) {
    try {
        return database('gifts')
            .where('sessionId', sessionId)
    } catch {
        return {
            message: "not found error"
        }
    }
}