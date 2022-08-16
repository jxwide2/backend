export default function handler(req, res) {
    if (req.method === 'POST') {

        req.query.roomname
        req.query.usercount
        req.query.budget
        req.query.enddate

        //создаем комнату

        return res.status(200).json({id: id})
    } else {

        req.query.userid
        //смотрим бд

        const sessions = [1, 2, 3, 4]

        return res.status(200).json({sessions: sessions})


    }
}