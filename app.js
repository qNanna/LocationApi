import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

import config from './config/index';
import api from './api/index';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', api);

app.listen(config.port, config.host, () => console.info(chalk.green(`Microservice has started on ${config.host}:${config.port}`)));
