import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../Controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking); // Create booking
router.get('/:id', getBooking); // Get a single booking
router.get('/', getAllBooking); // Get all bookings

export default router;


