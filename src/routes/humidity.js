import express from 'express';
import {
    getAllHumidityMeasurements,
    getHumidityMeasurementById,
    getLatestHumidityMeasurementRecord,
} from '../controllers/humidityController.js'

const router = express.Router();

router.get('/humidity', getAllHumidityMeasurements);
router.get('/humidity/:id', getHumidityMeasurementById);
router.get('/humidity/latest/record', getLatestHumidityMeasurementRecord);

export default router;
