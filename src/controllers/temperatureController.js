import createPool from '../config/db.js';

const pool = createPool();

export const getTemperature = async (req, res) => {
    try {
	const result = await pool.query('SELECT temperature FROM dht22');
	res.status(200).json(result.rows);
    } catch (err) {
	console.error('There has been an error: ', err.stack);
    }
}
