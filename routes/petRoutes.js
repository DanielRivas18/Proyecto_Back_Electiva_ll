const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - species
 *         - breed
 *         - age
 *         - owner
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the pet
 *         name:
 *           type: string
 *           description: The name of the pet
 *         species:
 *           type: string
 *           description: The species of the pet
 *         breed:
 *           type: string
 *           description: The breed of the pet
 *         age:
 *           type: number
 *           description: The age of the pet
 *         medicalHistory:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of medical records associated with the pet
 *         owner:
 *           type: string
 *           description: The ID of the owner of the pet
 *       example:
 *         id: d5fE_asz
 *         name: Fluffy
 *         species: Dog
 *         breed: Golden Retriever
 *         age: 5
 *         medicalHistory: [ '64e1f789ab4b5d2b1c2d3e4f' ]
 *         owner: 64e1f789ab4b5d2b1c2d3e4f
 */

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: The pets managing API
 */

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Returns the list of all the pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: The list of the pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
router.get('/', petController.getAllPets);

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     summary: Get the pet by id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 *     responses:
 *       200:
 *         description: The pet description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: The pet was not found
 */
router.get('/:id', petController.getPetById);

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Create a new pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: The pet was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       400:
 *         description: Invalid input
 */
router.post('/', petController.createPet);

/**
 * @swagger
 * /pets/{id}:
 *   put:
 *     summary: Update the pet by the id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: The pet was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: The pet was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', petController.updatePet);

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Delete a pet by the id
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pet id
 *     responses:
 *       200:
 *         description: The pet was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pet deleted successfully
 *       404:
 *         description: The pet was not found
 *       500:
 *         description: Some error happened
 */
router.delete('/:id', petController.deletePet);

module.exports = router;
