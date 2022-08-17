import {sessionCreate, sessionGet} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res) {
    let {body} = req;
    if (req.method === 'POST') {
        let session = await sessionCreate({
            name: body.name
        })
        console.log(session)
        res.status(200).json(session);
    }
}