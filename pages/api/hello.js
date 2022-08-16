// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


const middleware = (func) => (req, res) => {

  if (req.body === null && req.method === 'POST')
    throw new Error("Can't divide by zero")
  console.log(req)
  return func(req, res)
}