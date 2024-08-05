const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Obtener todas las mascotas
router.get('/', petController.getAllPets);

// Obtener una mascota por ID
router.get('/:id', petController.getPetById);

// Actualizar una mascota por ID
router.put('/:id', petController.updatePet);

module.exports = router;
