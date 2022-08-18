import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export const middlewareHelper = (mds = [], cb) => ( req, res) => {


    console.log('PATH: ', req.url)

    console.log('KEY: ', req.headers.authorization)
    console.log('BODY: ', req.body)

    console.log()
    let out = {}
    mds.map((m) => {
        console.log( )
        out = {...out, ...m(req, res)}
    })

    if (out.block)
        //res.status(500).json({error:" "})
        res.status(500).send("error")
    else
        return cb(req, res, out)
}
