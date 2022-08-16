import * as yup from 'yup'
import jwt from "jsonwebtoken";

const sessionSchema = yup.object({
    name: yup.string().required(),
    membersCount: yup.number().positive().integer().required(),
    money: yup.number().positive().integer().required(),
    endDate: yup.date().default(function () {
        return new Date();
    }),
})

const userSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required().min(8, 'Must be more than 8 symbols'),
})


const schemas = {
    session: sessionSchema,
    user: userSchema,
}

export const validationMiddleware = (schemaName) => (req, res) => {
    const schema = schemas[schemaName]

    const result = schema.isValidSync(req.body)

    if (!result) {

        return {
            block: true,
            // message: result
        }
    }
    else  {
        return {}
    }

    // console.log(result)
    //
}
