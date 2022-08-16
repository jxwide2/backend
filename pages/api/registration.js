import jwt from 'jsonwebtoken';


const middleware = cb => (req, res) => {

    //если логин не в дб
    if (!true) {
        //создать пользователя и войти
        req.query.login
        req.query.password
        return cb(req, res, {isAuthorized: true})
        }
    else {
        return cb(req, res, {isAuthorized: false})
    }

}


export default middleware(async (req, res, accountability) => {

    if (req.query.sign) {
        try {
            const decoded = jwt.verify(req.query.sign, 'signature', {}, () => {
            });
            res.status(200).json({body: decoded, 321: 321})
        } catch (e) {
            res.status(500).json({error: 'Not valid key!'})
        }
    } else {
        const message = await jwt.sign({foo: 'bar'}, 'signature');
        console.log(accountability.isAuthorized)
        res.status(200).json({
            token: accountability.isAuthorized ? message : ''
        })
    }
})