// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken';



// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }




const middleware = cb => (req, res) => {

  if (req.query.test === 'aboba') {
    console.log('authorised')
    return cb(req, res, {isAuthorized: true})
  } else {
    console.log('not authorised')
    return cb(req, res, {isAuthorized: false})
  }
}


export default middleware(async (req, res, accountability) => {

  if (req.query.sign) {
    try {
      const decoded = jwt.verify(req.query.sign, 'key');
      console.log('decoded ', decoded)
      //user id return
      res.status(200).json({body: decoded.userId})
    } catch (e) {
      res.status(500).json({error: 'Not valid key!'})
    }
  } else {
    res.status(500).json({error: 'No sign!'})
  }
})