import express from 'express';
import {
    getAllTemperatureMeasurements,
    getTemperatureMeasurementById,
} from '../controllers/temperatureController.js'

const router = express.Router();

router.get('/temperature', getAllTemperatureMeasurements);
router.get('/temperature/:id', getTemperatureMeasurementById);

export default router;
