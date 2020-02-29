const Sequelize = require("sequelize");
// const Movie = require("./movie/model");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

const Movie = db.define(
  "Movie",
  {
    title: {
      type: Sequelize.STRING
    },
    yearOfRelease: {
      type: Sequelize.INTEGER
    },
    synopsis: {
      type: Sequelize.TEXT
    }
  },
  { timestamps: false }
);

db.sync()

  .then(() =>
    Promise.all([
      // Insert 3 new rows
      Movie.create({
        title: "The Lost Left Shoe of PinKin McBeard",
        yearOfRelease: 07,
        synopsis:
          "After Kerblub Macintyre receives a gold envolope with a disastrous message, things start to spiral out of control"
      }),
      Movie.create({
        title: "Junior JavaScript developer at Travel company",
        yearOfRelease: 2947,
        synopsis:
          "Seventy three bald men wake up in the sewers of chicago, all of them are painted red except for one."
      }),
      Movie.create({
        title: "Two bridges to Near",
        yearOfRelease: 3276,
        synopsis: "Gurbl mc gurber Mac Berber Beber Shmerber"
      })
    ])
  )
  .then(() => console.log("Database Starlink confirmed"))
  .catch(console.error);

module.exports = db;
