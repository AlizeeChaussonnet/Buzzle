const mysql = require('mysql2/promise');

/**
 * Connection à la BDD. Renvoie le pool de connections pour pouvoir
 * exécuter des requêtes dessus.
 * 
 * @param {Object} config La configuration du pool (cf: https://www.npmjs.com/package/mysql2#using-connection-pools)
 * 
 * @return Un pool de connections.
 */
const connect = (config) =>
  mysql.createPool({
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ...config,
  });

module.exports = {
  connect,
};
