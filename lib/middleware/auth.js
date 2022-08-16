import jwt from "jsonwebtoken";

export const authMiddleware = cb => (req, res) => {
    if (req.query.sign) {
        try {
            const decoded = jwt.verify(req.query.sign, 'key');

            console.log('decoded ', decoded)

            return cb(req, res, {id: decoded.userId})
        } catch (e) {
            res.status(500).json({error: 'Not valid key!'})
        }
    } else {
        res.status(500).json({error: 'No sign!'})
    }
}
