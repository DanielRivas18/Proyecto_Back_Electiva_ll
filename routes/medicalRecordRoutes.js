const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

/**
 * @swagger
 * components:
 *   schemas:
 *     MedicalRecord:
 *       type: object
 *       required:
 *         - visitDate
 *         - services
 *         - pet
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the medical record
 *         visitDate:
 *           type: string
 *           format: date
 *           description: The date of the visit
 *         services:
 *           type: array
 *           items:
 *             type: string
 *           description: The services provided during the visit
 *         notes:
 *           type: string
 *           description: Additional notes about the visit
 *         pet:
 *           type: string
 *           description: The ID of the pet associated with the medical record
 *       example:
 *         id: d5fE_asz
 *         visitDate: 2024-08-01T00:00:00.000Z
 *         services: [ "Vaccination", "Check-up" ]
 *         notes: "Pet is in good health."
 *         pet: 64e1f789ab4b5d2b1c2d3e4f
 */

/**
 * @swagger
 * tags:
 *   name: MedicalRecords
 *   description: The medical records managing API
 */

/**
 * @swagger
 * /medical-records:
 *   get:
 *     summary: Returns the list of all the medical records
 *     tags: [MedicalRecords]
 *     responses:
 *       200:
 *         description: The list of the medical records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MedicalRecord'
 */
router.get('/', medicalRecordController.getAllMedicalRecords);

/**
 * @swagger
 * /medical-records/{id}:
 *   get:
 *     summary: Get the medical record by id
 *     tags: [MedicalRecords]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The medical record id
 *     responses:
 *       200:
 *         description: The medical record description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicalRecord'
 *       404:
 *         description: The medical record was not found
 */
router.get('/:id', medicalRecordController.getMedicalRecordById);

/**
 * @swagger
 * /medical-records:
 *   post:
 *     summary: Create a new medical record
 *     tags: [MedicalRecords]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicalRecord'
 *     responses:
 *       201:
 *         description: The medical record was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicalRecord'
 *       400:
 *         description: Invalid input
 */
router.post('/', medicalRecordController.createMedicalRecord);

/**
 * @swagger
 * /medical-records/{id}:
 *   put:
 *     summary: Update the medical record by the id
 *     tags: [MedicalRecords]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The medical record id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicalRecord'
 *     responses:
 *       200:
 *         description: The medical record was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicalRecord'
 *       404:
 *         description: The medical record was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', medicalRecordController.updateMedicalRecord);

module.exports = router;
