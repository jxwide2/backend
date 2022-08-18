import {getSessionsFromUser, sessionCreate} from "../../../components/db/dbclient/sessions/session-service";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";

const sessions = middlewareHelper([authMiddleware], async (req, res, context) => {
    if (req.method === 'POST') {
        //создаем комнату
        const a = await sessionCreate(req.body, context.id)
        return res.status(200).json(a)

    } else {
        const sessions = await getSessionsFromUser(context.id)
        return res.status(200).json(sessions)
    }
})

export default sessions;