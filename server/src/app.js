const express = require('express');
const expressSession = require('express-session');

const { sessionConfig } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
const expressSessionConfig = sessionConfig.expressSession;

app.use(expressSession(expressSessionConfig));

app.use('/api/v1/auth', authRoutes);

module.exports = app;
