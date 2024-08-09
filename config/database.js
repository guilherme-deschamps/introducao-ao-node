const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const dbName = 'nome_do_seu_banco';
const dbUser = 'usuario_do_banco';
const dbPassword = 'senha_do_banco';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql', // ou 'postgres', 'sqlite', etc.

  // Configurações adicionais (opcional)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;