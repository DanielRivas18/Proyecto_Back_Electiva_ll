const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

// Obtener todos los registros médicos
router.get('/', medicalRecordController.getAllMedicalRecords);

// Obtener un registro médico por ID
router.get('/:id', medicalRecordController.getMedicalRecordById);

// Actualizar un registro médico por ID
router.put('/:id', medicalRecordController.updateMedicalRecord);

module.exports = router;
