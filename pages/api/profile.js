import {authMiddleware} from "../../lib/middleware/auth";
import {middlewareHelper} from "../../lib/middleware";
import {validationMiddleware} from "../../lib/middleware/validation";
import {getUserInfo} from "../../components/db/dbclient/users/user-service";

const profile = middlewareHelper([authMiddleware], async (req, res, context) => {
    console.log(context)
    const user = await getUserInfo(context.id)
    //получаем профиль из бд
    res.status(200).json(user)

})
export default profile