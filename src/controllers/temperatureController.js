import createPool from '../config/db.js';

const pool = createPool();

const getAllTemperatureMeasurements = async (req, res) => {
    try {
	const result = await pool.query('SELECT temperature FROM dht22');
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error: ', err.stack);
    }
}

const getTemperatureMeasurementById = async (req, res) => {
    const { id } = req.params;
    try {
	const result = await pool.query(`SELECT temperature FROM dht22 WHERE id=${id}`);
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error: ', err.stack);
    }
}

const getLatestTemperatureMeasurementRecord = async (req, res) => {
    try {
	const result = await pool.query(`SELECT temperature FROM dht22 ORDER BY timestamp DESC LIMIT 1`);
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error latest: ', err.stack);
    }
}

export {
    getAllTemperatureMeasurements,
    getTemperatureMeasurementById,
    getLatestTemperatureMeasurementRecord,
};
