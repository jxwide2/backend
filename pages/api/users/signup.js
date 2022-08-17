import {userCreate} from "../../../components/db/dbclient/users/user-service";
import {middlewareHelper} from "../../../lib/middleware";
import {authMiddleware} from "../../../lib/middleware/auth";
import {validationMiddleware} from "../../../lib/middleware/validation";

const register = middlewareHelper([authMiddleware, validationMiddleware('user')], async (req, res) => {
    const {method, body} = req;
    if (method === 'POST') {
        let user = await userCreate(body);
        res.status(200).json(user);
    }
})

export default register;