import {getUsersFromSession} from "../../../components/db/dbclient/sessions/session-service";


export default async function handler(req, res) {
    let {id} = req.query;
    if (req.method === 'GET') {
        let users = await getUsersFromSession(id);
        res.status(200).json(users);
    }
}

export default function handler(req, res) {

    req.query.id

    roomname
    usercount
    budget
    enddate

    return res.status(200).json({roomname: roomname, usercount: usercount, budget: budget, enddate: enddate})

}