const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const initializeConnection = () => {
  /* create a connection object using createConnection function of mysql module*/
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  connection.connect(error => {
    if (error) {
      throw error;
    }
    console.log("Successfully connected");
  });

  return connection;
};

module.exports = initializeConnection;
