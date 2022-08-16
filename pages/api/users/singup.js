import {userCreate} from "../../../components/db/dbclient/users/user-service";

export default async function handler(req, res) {
    const {method, body} = req;
    if (method === 'POST') {
        // const body = JSON.parse(req.body);
        if (body.username && body.password) {
            let user = await userCreate(body);
            res.status(200).json(user);
        }
    }
}