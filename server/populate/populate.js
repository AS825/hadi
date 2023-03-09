/*Loading the .env file and creates environment variables from it
 */
require("dotenv").config();
const mongoose = require("mongoose");
const streetNames = require("../mock/streetNames.json");
const streetNums = require("../mock/streetNums.json");
const cities = require("../mock/cities.json");
const prices = require("../mock/prices.json");
const titles = require("../mock/titles.json");
const desriptions = require("../mock/desription.json");
const sizes = require("../mock/sizes.json");
const mockLength = require("../mock/mockLength.json");


const PropertyModel = require("../db/Propertymodel");

mongoose.set("strictQuery", false);

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateProperties = async () => {
  await PropertyModel.deleteMany({});

  const property = mockLength.map((val) => ({
    location: pick(streetNames) + " " + pick(streetNums) + ", " +pick(cities),
    title: pick(titles),
    price: pick(prices),
    size: pick(sizes),
    bedroom: random(1, 4),
    bathroom: random(1, 2),
    desription: pick(desriptions),
  }));

  await PropertyModel.create(...property);
  console.log("Properties created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateProperties();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
