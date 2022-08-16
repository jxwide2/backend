import {login} from "../../../components/db/dbclient/users/user-service";

export default function handler(req, res) {
    const {method} = req;
    if (method === 'POST') {
        const body = JSON.parse(req.body);
        if (body.username && body.password) {
            try {
                let user = login(body.username, body.password);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(403).json({
                    message: e.message
                })
            }
        }
    }
}