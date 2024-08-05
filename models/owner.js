const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: { type: String, required: true },
  numDocumento: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
