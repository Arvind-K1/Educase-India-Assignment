const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', schoolRoutes);

module.exports = app;
