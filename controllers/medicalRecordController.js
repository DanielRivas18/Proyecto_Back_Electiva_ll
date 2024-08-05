const MedicalRecord = require('./../models/medicalRecord');

// Obtener todos los registros médicos
exports.getAllMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find().populate('pet');
    res.json(medicalRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un registro médico por ID
exports.getMedicalRecordById = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id).populate('pet');
    if (!medicalRecord) return res.status(404).json({ message: 'MedicalRecord not found' });
    res.json(medicalRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un registro médico por ID
exports.updateMedicalRecord = async (req, res) => {
  try {
    const { visitDate, services, notes, pet } = req.body;
    const medicalRecord = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      { visitDate, services, notes, pet },
      { new: true, runValidators: true }
    );
    if (!medicalRecord) return res.status(404).json({ message: 'MedicalRecord not found' });
    res.json(medicalRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
