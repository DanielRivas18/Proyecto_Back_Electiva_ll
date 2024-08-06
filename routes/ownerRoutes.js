const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Owner:
 *       type: object
 *       required:
 *         - name
 *         - numDocumento
 *         - address
 *         - phone
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the owner
 *         name:
 *           type: string
 *           description: The name of the owner
 *         numDocumento:
 *           type: string
 *           description: The document number of the owner
 *         address:
 *           type: string
 *           description: The address of the owner
 *         phone:
 *           type: string
 *           description: The phone number of the owner
 *         email:
 *           type: string
 *           description: The email of the owner
 *       example:
 *         
 *         name: John Doe
 *         numDocumento: 123456789
 *         address: 123 Main St
 *         phone: 555-1234
 *         email: john@example.com
 */

/**
 * @swagger
 * tags:
 *   name: Owners
 *   description: The owners managing API
 */

/**
 * @swagger
 * /owners:
 *   get:
 *     summary: Returns the list of all the owners
 *     tags: [Owners]
 *     responses:
 *       200:
 *         description: The list of the owners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Owner'
 */
router.get('/', ownerController.getAllOwners);

/**
 * @swagger
 * /owners/{id}:
 *   get:
 *     summary: Get the owner by id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The owner id
 *     responses:
 *       200:
 *         description: The owner description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 *       404:
 *         description: The owner was not found
 */
router.get('/:id', ownerController.getOwnerById);

/**
 * @swagger
 * /owners:
 *   post:
 *     summary: Create a new owner
 *     tags: [Owners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Owner'
 *     responses:
 *       201:
 *         description: The owner was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 *       500:
 *         description: Some server error
 */
router.post('/', ownerController.createOwner);

/**
 * @swagger
 * /owners/{id}:
 *   put:
 *     summary: Update the owner by the id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The owner id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Owner'
 *     responses:
 *       200:
 *         description: The owner was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 *       404:
 *         description: The owner was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', ownerController.updateOwner);

/**
 * @swagger
 * /owners/{id}:
 *   delete:
 *     summary: Delete an owner by the id
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The owner id
 *     responses:
 *       200:
 *         description: The owner was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Owner deleted successfully
 *       404:
 *         description: The owner was not found
 *       500:
 *         description: Some error happened
 */
router.delete('/:id', ownerController.deleteOwner);

module.exports = router;
