// noinspection JSCheckFunctionSignatures

import jwt from "jsonwebtoken";

export default async function handler (req, res) {
    // console.log(req)
    const message = await jwt.sign({roomId: 13}, process.env.SUPER_PRIVATE_KEY);
    console.log("message ", message)
    res.status(200).json({
        token: message
    })
}