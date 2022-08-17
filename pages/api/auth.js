import {userLogin} from "../../components/db/dbclient/users/user-service";
import {middlewareHelper} from "../../lib/middleware";
import {validationMiddleware} from "../../lib/middleware/validation";
import jwt from "jsonwebtoken";



const auth = middlewareHelper([validationMiddleware('user')], async (req, res) => {
    const user = await userLogin(req.body.username, req.body.password)

    console.log(user)
    res.status(user?.error ? 422 : 200).json(!user?.error ? {
        user: user,
        token: await jwt.sign({ userId: user?.id}, process.env.SUPER_PRIVATE_KEY)
    }: user)
})

export default auth;

