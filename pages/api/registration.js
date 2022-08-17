import jwt from 'jsonwebtoken';
import {userCreate} from "../../components/db/dbclient/users/user-service";


export default async function handler(req, res) {

    //если логин не в дб
    const user = await userCreate(req.body)
    console.log(user)
    res.status(user?.error ? 422 : 200).json(user)

}


