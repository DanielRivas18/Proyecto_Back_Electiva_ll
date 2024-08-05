const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalRecordSchema = new Schema({
  visitDate: { type: Date, required: true },
  services: [{ type: String, required: true }],
  notes: { type: String },
  pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true }
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
