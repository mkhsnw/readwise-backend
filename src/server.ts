import app from './app';
import { config } from './config/config';

app.listen(config.port, async () => {
  try {
    console.log(`Server is running on port ${config.port}`);
    console.log('Connected to the database');
  } catch (err) {
    console.log('Unable to connect to the database:', err);
  }
});
