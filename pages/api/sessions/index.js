import {sessionCreate, sessionGet} from "../../../components/db/dbclient/sessions/session-service";

export default async function handler(req, res) {
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
}