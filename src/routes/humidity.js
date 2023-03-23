import express from 'express';
import {
    getAllHumidityMeasurements,
    getHumidityMeasurementById,
} from '../controllers/humidityController.js'

const router = express.Router();

router.get('/humidity', getAllHumidityMeasurements);
router.get('/humidity/:id', getHumidityMeasurementById);

export default router;
