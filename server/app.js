const express = require('express');
const expressSession = require('express-session');

const { sessionConfig } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();

app.use(expressSession(sessionConfig));

app.use('/api/v1/auth', authRoutes);

module.exports = app;
