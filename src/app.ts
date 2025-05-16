import express from 'express';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'Healthy',
    message: 'Server Started Succesfullly',
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

export default app;
