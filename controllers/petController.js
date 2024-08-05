const Pet = require('../models/pet');

// Obtener todas las mascotas
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una mascota por ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('owner');
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una mascota por ID
exports.updatePet = async (req, res) => {
  try {
    const { name, species, breed, age, owner } = req.body;
    const pet = await Pet.findByIdAndUpdate(
      req.params.id,
      { name, species, breed, age, owner },
      { new: true, runValidators: true }
    );
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};