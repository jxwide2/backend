import {database} from "./db";

function findAll() {
    return database('users');
}