const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  location: String,
  title: String,
  price: Number,
  size: String,
  bedroom: Number,
  bathroom: Number,
  desription: String,
});

module.exports = mongoose.model("Property", PropertySchema);


// title,
// projectnumber,
// immotype,
// details,
// completionofBuild,
// livingspace,
// area,
// price,
// location
// city,
// adress{
//   streetname:
//   streetnumber:
// }



