const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  medicalHistory: [{ type: Schema.Types.ObjectId, ref: 'MedicalRecord' }],
  owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
