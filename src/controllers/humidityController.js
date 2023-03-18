import createPool from '../config/db.js';

const pool = createPool();

const getAllHumidityMeasurements = async (req, res) => {
    try {
	const result = await pool.query('SELECT humidity FROM dht22');
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error: ', err.stack);
    }
}

const getHumidityMeasurementById = async (req, res) => {
    const { id } = req.params;
    try {
	const result = await pool.query(`SELECT humidity FROM dht22 WHERE id=${id}`);
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error: ', err.stack);
    }
}

export {
    getAllHumidityMeasurements,
    getHumidityMeasurementById,
};
