import mysql from "mysql2/promise"

import 'dotenv/config'

//Define the db configs
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USER
const password = process.env.DB_PASS
const database = process.env.DB_NAME

export const databaseConnection = async () => {
    let singleStoreConnection;

    try {

    singleStoreConnection= await mysql.createConnection({
        host: host,
        port: port,
        user: username,
        password: password,
        database: database
    });
        console.log("singleStoreConnection was successfully connected")
    } catch (err) {
       console.error("error when connecting to singleStoreConnection", err.message, err.stack);
        process.exit(1)

    } finally {
        if (singleStoreConnection) {
            await singleStoreConnection.end()
        }
         }
}
