import express from 'express';
import temperatureRoutes from './routes/temperature.js';
import humidityRoutes from './routes/humidity.js';

const app = express();

app.use('/temperature', temperatureRoutes);
app.use('/humidity', humidityRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
