import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import { router as apiRoutes } from '../routes';

// initialize express app
export const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// adding new middlewares - MORGAN and HELMET
app.use(helmet());
app.use(morgan('common'));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount api v1 routes
app.use('/api/', apiRoutes);
