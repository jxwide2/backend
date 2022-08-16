import {findAll} from "../../../components/db/dbclient/users/user-service";

export default async function handler(req, res) {
    let users = await findAll();
    res.status(200).json(users);
}