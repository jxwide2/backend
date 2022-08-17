import {userCreate, userLogin} from "../../components/db/dbclient/users/user-service";


export default async function handler(req, res) {

    //если логин не в дб
    const user = await userLogin(req.body.username, req.body.password)
    console.log(user)
    res.status(user?.error ? 422 : 200).json(user)

}