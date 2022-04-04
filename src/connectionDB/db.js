const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/crud_node') // Example for postgres

async function teste() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = sequelize;