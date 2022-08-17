import {validationMiddleware} from "../../lib/middleware/validation";
import {authMiddleware} from "../../lib/middleware/auth";
import {middlewareHelper} from "../../lib/middleware";



// export default authMiddleware(validationMiddleware('user',(req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }))


// const hello = (req, res) => {
  // res.status(200).json({ name: 'John Doe' })
// }
const hello = middlewareHelper([authMiddleware, validationMiddleware('user')], (req, res) => {
    //res.status(200).json({'d': 'd'})
    res.status(200).send('verified all')
})

export default hello;