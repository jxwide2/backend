import {getUsersFromSession, sessionGet} from "../../../components/db/dbclient/sessions/session-service";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";
import {findGiftBySenderAndSession} from "../../../components/db/dbclient/gifts/gifts-service";

const handler = middlewareHelper([authMiddleware], async (req, res, context) => {
    if (req.method === 'GET') {
        let session = await sessionGet(+req.query.id)
        let users = await getUsersFromSession(+req.query.id);
        let id = await findGiftBySenderAndSession(context.id, +req.query.id)
        res.status(200).json({users: users, session: session, id: id.id});
    }
})

export default handler;

