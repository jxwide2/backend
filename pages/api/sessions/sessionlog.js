import {sessionCreate, sessionGet} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(await sessionGet(req.body.id));
        console.log(req.body);
        }
}