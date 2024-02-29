// routes/tobbarRoutes.js
const express = require('express');
const router = express.Router();
const tobbarController = require('../Controller/tobbarController');

// GET all Tobbar details
router.get('/', tobbarController.getTobbarDetails);

// POST new Tobbar details
router.post('/', tobbarController.addTobbarDetails);

// PUT update Tobbar details
router.put('/:id', tobbarController.updateTobbar);

// DELETE Tobbar details
router.delete('/:id', tobbarController.deleteTobbar);

module.exports = router;
