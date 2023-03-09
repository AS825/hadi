require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3800;


//Schema
const PropertySchema = require("./db/Propertymodel");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const data = await PropertySchema.find();
    return res.json(data);
  });

  app.get("/home", async (req, res) => {
    const data = await PropertySchema.find().limit(3);
    return res.json(data);
  });


  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });