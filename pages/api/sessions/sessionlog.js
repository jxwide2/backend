import {getUsersFromSession} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res) {
    let {id} = req.query;
    if (req.method === 'GET') {
        let users = await getUsersFromSession(id);
        res.status(200).json(users);
    }
}