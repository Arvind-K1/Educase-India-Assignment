const express = require('express');
const { addSchool, listSchools } = require('../controllers/schoolController');

const router = express.Router();

// Add School API
router.post('/addSchool', addSchool);

// List Schools API
router.get('/listSchools', listSchools);

module.exports = router;
