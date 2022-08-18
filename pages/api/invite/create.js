import jwt from "jsonwebtoken";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";
import {createRelation} from "../../../components/db/dbclient/users_sessions/users_sessions-service";


const invite = middlewareHelper([authMiddleware], async (req, res, context) => {

    const invite = await jwt.sign(req.body.id, process.env.SUPER_PRIVATE_KEY)
    return res.status(200).json({invite: invite})


})
export default invite