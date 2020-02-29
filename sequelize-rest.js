const Sequelize = require("sequelize");
const Movie = require("./movie/model");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("Database Starlink confirmed"))
  .catch(console.error);

module.exports = db;
