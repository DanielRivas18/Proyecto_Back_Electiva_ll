const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

// Obtener todos los dueños
router.get('/', ownerController.getAllOwners);

// Obtener un dueño por ID
router.get('/:id', ownerController.getOwnerById);

// Crear un nuevo dueño
router.post('/', ownerController.createOwner);

// Actualizar un dueño por ID
router.put('/:id', ownerController.updateOwner);

module.exports = router;
