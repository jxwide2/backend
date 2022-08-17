export const middlewareHelper = (mds = [], cb) => ( req, res) => {
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