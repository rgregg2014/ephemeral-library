const db = require("../config/connection");
const { Book } = require("../models");
const bookSeeds = require("./bookSeeds.json");

db.once("open", async () => {
  try {
    await Book.deleteMany({});
    await Book.create(bookSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("All Done!");
  process.exit(0);
});
