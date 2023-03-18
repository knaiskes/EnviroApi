import express from 'express';
import {
    getAllHumidityMeasurements,
    getHumidityMeasurementById,
} from '../controllers/humidityController.js'

const router = express.Router();

router.get('/', getAllHumidityMeasurements);
router.get('/:id', getHumidityMeasurementById);

export default router;
