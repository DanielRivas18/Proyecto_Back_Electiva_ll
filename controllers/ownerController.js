const Owner = require('../models/owner');

// Obtener todos los dueños
exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un dueño por ID
exports.getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ message: 'Owner not found' });
    res.json(owner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo dueño
exports.createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json(owner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un dueño por ID
exports.updateOwner = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;
    const owner = await Owner.findByIdAndUpdate(
      req.params.id,
      { name, address, phone, email },
      { new: true, runValidators: true }
    );
    if (!owner) return res.status(404).json({ message: 'Owner not found' });
    res.json(owner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
