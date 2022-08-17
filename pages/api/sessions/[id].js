import {getUsersFromSession} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res, context) {
    if (req.method === 'GET') {
        let users = await getUsersFromSession(context.id);
        res.status(200).json(users);
    }
}

