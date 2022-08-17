import jwt from 'jsonwebtoken';
import {userCreate} from "../../components/db/dbclient/users/user-service";
import {middlewareHelper} from "../../lib/middleware";
import {validationMiddleware} from "../../lib/middleware/validation";


const register = middlewareHelper([validationMiddleware('user')], async (req, res) => {
    const {method, body} = req;
    if (method === 'POST') {
        const user = await userCreate(body)

        res.status(user?.error ? 422 : 200).json({
            user: user[0],
            token: user?.error || await jwt.sign({ userId: user[0]?.id}, process.env.SUPER_PRIVATE_KEY)
        })
    }

})

export default register;


