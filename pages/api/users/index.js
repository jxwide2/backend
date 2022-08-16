import {findAll} from "../../../components/db/dbclient/user-service";

export default function handler(req, res) {
    let users = findAll();
    res.status(200).json(users);
}