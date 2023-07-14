import config from "../../config";

import mysql from 'mysql2/promise';

let connection: mysql.Connection;

const getConnection = async () => {
    if (!connection) {
        connection =
        typeof config.mysql === "string"
          ? await mysql.createConnection(config.mysql)
          : config.mysql
          ? await mysql.createConnection(config.mysql)
          : null;
    }

    return connection;
}

export {
    getConnection
};
