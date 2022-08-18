import {createUsersTable} from "../../../components/db/dbclient/users/user-schema";
import {createSessionsTable} from "../../../components/db/dbclient/sessions/session-schema";
import {createUsersSessionsTable} from "../../../components/db/dbclient/users_sessions/users_sessions-schema";
import {createGiftsTable} from "../../../components/db/dbclient/gifts/gifts-schema";

export default function handler(req, res) {
    createUsersTable();
    createSessionsTable();
    createUsersSessionsTable();
    createGiftsTable();
    res.status(200).json({ message: 'OK' })
}
