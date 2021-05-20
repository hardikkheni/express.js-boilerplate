import express from 'express';
import * as path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import webRoutes from './routes/web';
import apiRoutes from './routes/api';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// register template engine ex:. ejs, hbs, pug etc...
app.set('view engine', 'pug');

// register view directory
app.set('views', path.join(__dirname, '../views'));

// register all end-points
app.use('/', webRoutes);
app.use('/api', apiRoutes);

// serve static file
app.use(express.static(path.join(__dirname, '../public')));

export default app;
