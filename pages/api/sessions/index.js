import {sessionCreate} from "../../../components/db/dbclient/sessions/session-service";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";



const sessions = middlewareHelper([authMiddleware], async (req, res) => {
    if (req.method === 'POST') {
        //создаем комнату
        const a = await sessionCreate(req.body)
        return res.status(200).json(a)

    } else {
        req.query.userid
        //смотрим бд
        const sessions = [1, 2, 3, 4]
        return res.status(200).json({sessions: sessions})
    }
})

export default sessions;