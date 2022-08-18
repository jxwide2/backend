import jwt from "jsonwebtoken";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";
import {createRelation} from "../../../components/db/dbclient/users_sessions/users_sessions-service";


const invite = middlewareHelper([authMiddleware], async (req, res, context) => {

    //КТО ПРОЧИТАЛ ТОТ


    const sessionId = await jwt.verify(req.query.token, process.env.SUPER_PRIVATE_KEY)
    await createRelation(context.id, sessionId)


    return res.status(200).json({id: sessionId})


})
export default invite