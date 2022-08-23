const express = require('express');
const app = express();
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json()); //

// Routes
app.get('/api/users', (req, res) => res.send('Users route'));
app.get('/api/notes', (req, res) => res.send('Notes route'));

module.exports = app;