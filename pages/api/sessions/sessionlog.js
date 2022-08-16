import {sessionCreate, sessionGet} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json(await sessionCreate(req.body.name));
        console.log(req.body);
        }
}