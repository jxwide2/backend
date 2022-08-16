import jwt from 'jsonwebtoken';


const middleware = cb => (req, res) => {

    //берем логин из дб
    const login = '123'
    //если логин в дб
    if (login === req.query.login) {
        //берем пароль из бд
        const password = '123'
        //сравниваем
        if (password === req.query.password) {
            return cb(req, res, {isAuthorized: true})
        }
        else {
            return cb(req, res, {isAuthorized: false, reason: 'Неверный пароль'})
        }
    }
    else {
        return cb(req, res, {isAuthorized: false, reason: 'Неверный логин'})
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