import express from 'express';

import { errorRoute, errorHandler } from './middlewares/errorHandler';
import locationRouter from './routers/locationRouter';
import serviceRouter from './routers/serviceRouter';

const api = express.Router();

api.use('/v1/location', locationRouter);
api.use('/service', serviceRouter);
api.use(errorRoute, errorHandler);

export default api;
