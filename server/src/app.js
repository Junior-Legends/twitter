const express = require('express');
const expressSession = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const { sessionConfig } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/auth');

const app = express();
const expressSessionConfig = sessionConfig.expressSession;

app.use(expressSession(expressSessionConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

module.exports = app;
