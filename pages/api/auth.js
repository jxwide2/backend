import jwt from 'jsonwebtoken';
import {userCreate, userLogin} from "../../components/db/dbclient/users/user-service";


export default function handler(req, res) {

    //если логин не в дб
    const user = userLogin(req.body)
    console.log(user)
    res.status(user?.error ? 422 : 200).json(user)

}