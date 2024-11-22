import express from 'express';
import sequelize from './config/database';
import router from './routes/card';

const app = express();

// Middleware
app.use(express.json());

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Sync models
sequelize
  .sync({ force: false }) // Change to `true` to drop and recreate tables
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing the database:', err));


app.use(router);

const PORT = 4444;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));