// noinspection JSCheckFunctionSignatures

import jwt from "jsonwebtoken";

export const authMiddleware = (req, res) => {
    if (req.headers?.authorization) {
        try {
            //  console.log(req.headers.authorization.slice(7));
            const decoded = jwt.verify(req.headers.authorization.slice(7), process.env.SUPER_PRIVATE_KEY);

            console.log('decoded ', decoded)

            return {id: decoded.userId}
        } catch (e) {
            res.status(500).json({error: 'Not valid key!'})
        }
    } else {
        res.status(500).json({error: 'No sign!'})
    }
}
