import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookingRoutes from './routes/bookings.js'; // Ensure correct path
import supportRoutes from './routes/supportRoutes.js'

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()

// Register Routes
app.use('/booking', bookingRoutes); // This must be correct
app.use('/api/support', supportRoutes); // Mount the support routes

mongoose.connect('mongodb://localhost:27017/databaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
app.get('/', (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
