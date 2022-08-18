import jwt from "jsonwebtoken";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";
import {createRelation} from "../../../components/db/dbclient/users_sessions/users_sessions-service";


const invite = middlewareHelper([authMiddleware], async (req, res, context) => {

    //КТО ПРОЧИТАЛ ТОТ


    console.log(req.query.token, context)
    const session = await jwt.verify(req.query.token, process.env.SUPER_PRIVATE_KEY)
    console.log(context.id)
    console.log(session)
    await createRelation(context.id, session)


    return res.status(200).json({id: session})


})
export default invite