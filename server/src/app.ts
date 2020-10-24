import express from 'express';
import expressSession from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import { sessionConfig } from './config';
import errorHandler from './middlewares/errorHandler';
import authRoutes from './routes/auth';

const app = express();
const expressSessionConfig = sessionConfig.expressSession;

app.use(expressSession(expressSessionConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

export default app;
