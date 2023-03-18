import express from 'express';
import {
    getAllTemperatureMeasurements,
    getTemperatureMeasurementById,
} from '../controllers/temperatureController.js'

const router = express.Router();

router.get('/', getAllTemperatureMeasurements);
router.get('/:id', getTemperatureMeasurementById);

export default router;
