import {findAll} from "../../../components/db/dbclient/users/user-service";

export default function handler(req, res) {
    let users = findAll();
    res.status(200).json(users);
}