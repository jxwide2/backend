import {userLogin} from "../../../components/db/dbclient/users/user-service";

export default async function handler(req, res) {
    const {method, body} = req;
    if (method === 'POST') {
        if (body.username && body.password) {
            try {
                let user = await userLogin(body.username, body.password);
                console.log(user)
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