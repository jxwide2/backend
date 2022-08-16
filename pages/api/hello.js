import {authMiddleware} from "../../lib/middleware/auth";



export default authMiddleware((req, res) => {
  res.status(200).json({ name: 'John Doe' })
})
