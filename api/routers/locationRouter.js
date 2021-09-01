import express from 'express';

import locationController from '../controllers/locationController';

const locationRouter = express.Router();

locationRouter.get('/transfer', (req, res, next) => locationController.transferLocation(req, res, next));

export default locationRouter;
