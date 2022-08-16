import {createUsersTable} from "../../../components/db/dbclient/users/user-schema";
import {createSessionsTable} from "../../../components/db/dbclient/sessions/session-schema";

export default function handler(req, res) {
    createUsersTable();
    createSessionsTable();
    //res.status(200).json({ name: 'John Doe' })
}
