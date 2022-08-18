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


    const id = req.body.id
    const role = await getUserRoleFromSession(id, context.id)
    console.log(role)
    if (role.userRole === "owner") {
        let users = await getUsersIdsFromSession(id)
        console.log(users)
        let users1 = fp.shuffle([...users])
        users = users1
        const [first, ...other] = users
        users1 = [other, first]
        users.forEach((userId, index) =>{
            console.log(userId.userId, users1[index].userId)
            giftCreate({senderId: userId.userId, receiverId: users1[index].userId, sessionId: id})
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