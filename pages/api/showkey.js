// noinspection JSCheckFunctionSignatures

import jwt from "jsonwebtoken";

export default async function handler (req, res) {
    const message = await jwt.sign({userId: 'id'}, 'key');
    console.log("message ", message)
    res.status(200).json({
        token: message
    })
}