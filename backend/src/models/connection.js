const mysql = require('mysql2/promise'); 
// Importação do pacote mysql2/promise usado para criar conexão com o banco de dados MySQL

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: 'StoreManager',
});
// O objeto retornado por mysql.createPool() contém métodos para executar consultas no banco de dados

module.exports = connection; // Objeto exportado para ser usado em outros arquivos