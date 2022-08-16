import {sessionCreate} from "../../../components/db/dbclient/sessions/session-service";

export default async function handler(req, res) {
    const {method, body} = req;
    if (method === 'POST') {
        if (body.name) {
            let session = await sessionCreate(body);
            res.status(200).json(session);
        }
    }
}