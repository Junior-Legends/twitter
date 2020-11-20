import express from 'express';
import expressSession from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { sessionConfig } from './config';
import errorHandler from './middlewares/errorHandler';
import authRoutes from './routes/auth';

const app = express();
const expressSessionConfig = sessionConfig.expressSession;

app.use(express.json({ limit: '4kb' }));
app.use(express.urlencoded({ extended: true }));

app.use(expressSession(expressSessionConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(
	cors({
		origin: '*',
		credentials: true,
	})
);

app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

export default app;
