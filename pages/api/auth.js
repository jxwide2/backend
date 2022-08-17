import {userLogin} from "../../components/db/dbclient/users/user-service";
import {middlewareHelper} from "../../lib/middleware";
import {authMiddleware} from "../../lib/middleware/auth";
import {validationMiddleware} from "../../lib/middleware/validation";



const auth = middlewareHelper([authMiddleware, validationMiddleware('user')], async (req, res) => {
    const user = await userLogin(req.body.username, req.body.password)
    console.log(user)
    res.status(user?.error ? 422 : 200).json(user)
})

export default auth;

