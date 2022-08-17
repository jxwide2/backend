import {getUsersFromSession} from "../../../components/db/dbclient/sessions/session-service";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";

const handler = middlewareHelper([authMiddleware], async (req, res) => {
    if (req.method === 'GET') {
        let users = await getUsersFromSession(+req.query.id);
        res.status(200).json(users);
    }
})

export default handler;

