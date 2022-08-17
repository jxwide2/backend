import {createUsersTable} from "../../../components/db/dbclient/users/user-schema";
import {createSessionsTable} from "../../../components/db/dbclient/sessions/session-schema";
import {createUsersSessionsTable} from "../../../components/db/dbclient/users_sessions/users_sessions-schema";

export default function handler(req, res) {
    createUsersTable();
    createSessionsTable();
    createUsersSessionsTable();
    res.status(200).json({ message: 'OK' })
}
