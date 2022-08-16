import {create} from "../../../components/db/dbclient/users/user-service";

export default function handler(req, res) {
    const {method} = req;
    if (method === 'POST') {
        const body = JSON.parse(req.body);
        if (body.username && body.password) {
            let user = create(body);
            res.status(200).json(user);
        }
    }
}