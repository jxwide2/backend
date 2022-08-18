import {middlewareHelper} from "../../../lib/middleware";
import {validationMiddleware} from "../../../lib/middleware/validation";
import {userLogin} from "../../../components/db/dbclient/users/user-service";
import jwt from "jsonwebtoken";
import {authMiddleware} from "../../../lib/middleware/auth";
import sessions from "./index";
import {sessionGet} from "../../../components/db/dbclient/sessions/session-service";

const start = middlewareHelper([authMiddleware()], async (req, res, context) => {


    const id = await jwt.verify(req.body.id , process.env.SUPER_PRIVATE_KEY)
    const session = await sessionGet(id)
    const role =
    if (role === "owner") {

    } else {
        res.status(200).json("куда мы лезем")
    }

})

export default start;