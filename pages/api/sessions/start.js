import {middlewareHelper} from "../../../lib/middleware";
import {validationMiddleware} from "../../../lib/middleware/validation";
import {userLogin} from "../../../components/db/dbclient/users/user-service";
import jwt from "jsonwebtoken";
import {authMiddleware} from "../../../lib/middleware/auth";
import sessions from "./index";
import fp from 'lodash/fp'
import {sessionGet} from "../../../components/db/dbclient/sessions/session-service";
import {
    getUserRoleFromSession,
    getUsersIdsFromSession
} from "../../../components/db/dbclient/users_sessions/users_sessions-service";
import {giftCreate} from "../../../components/db/dbclient/gifts/gifts-service";

const start = middlewareHelper([authMiddleware], async (req, res, context) => {


    const id = await jwt.verify(req.body.id, process.env.SUPER_PRIVATE_KEY)
    const session = await sessionGet(id)
    const role = await getUserRoleFromSession(id, context.id)
    const relationUsers = []
    if (role[0] === "owner") {
        let users = getUsersIdsFromSession(id)
        let users1 = fp.shuffle([...users])
        users = users1
        const [first, ...other] = users
        users1 = [other, first]
        users.forEach((userId, index) =>{
            giftCreate({senderId: userId, receiverId: users1[index], sessionId: id})
        })


        // while (true) {
        //     users1 = fp.shuffle(users1)
        //     users1.map((userId, index) => {
        //         if (userId === users[index]) {
        //             continue
        //         }
        //     })
        // }
        console.log(users1)
    } else {
        res.status(200).json("куда мы лезем")
    }

})

export default start;