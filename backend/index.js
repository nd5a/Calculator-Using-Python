import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
import supportRoutes from './routes/supportRoutes.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
   res.send('API is working fine');
});

const corsOptions = {
   origin: true,
   credentials: true
};

mongoose.set("strictQuery", false);
const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });

      console.log('MongoDB database connected');
   } catch (error) {
      console.log('MongoDB connection failed:', error.message);
   }
};

// Call the connect function to establish MongoDB connection
connect();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use('/api/v1/support', supportRoutes); // Mount the support routes

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Ensure MIME types are correctly set
app.get('*.css', (req, res, next) => {
  res.type('text/css');
  next();
});

app.get('*.js', (req, res, next) => {
  res.type('application/javascript');
  next();
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
