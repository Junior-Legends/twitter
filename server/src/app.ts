import express from 'express';
import expressSession from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import { sessionConfig } from './config';
import errorHandler from './middlewares/errorHandler';
import authRoutes from './routes/auth';
import projectConfig from './config/project';

const app = express();
const expressSessionConfig = sessionConfig.expressSession;

app.use(express.json({ limit: '4kb' }));
app.use(express.urlencoded({ extended: true }));

app.use(expressSession(expressSessionConfig));

if (projectConfig.isProduction) {
	app.use(mongoSanitize());
	app.use(helmet());
	app.use(hpp());
	app.use(
		rateLimit({
			handler: (req, res) => {
				res.status(429).json({ message: 'Too many requests.' });
			},
			windowMs: 1000 * 60,
			max: 50,
		})
	);
}

app.use(morgan('dev'));
app.use(
	cors({
		origin: '*',
		credentials: true,
	})
);

app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

export default app;
