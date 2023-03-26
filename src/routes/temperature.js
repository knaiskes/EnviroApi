import express from 'express';
import {
    getAllTemperatureMeasurements,
    getTemperatureMeasurementById,
    getLatestTemperatureMeasurementRecord
} from '../controllers/temperatureController.js'

const router = express.Router();

router.get('/temperature', getAllTemperatureMeasurements);
router.get('/temperature/:id', getTemperatureMeasurementById);
router.get('/temperature/latest/record', getLatestTemperatureMeasurementRecord);

export default router;
