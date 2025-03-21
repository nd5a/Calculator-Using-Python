// const express = require("express");
// const router = express.Router();
// const User = require("../models/User"); // Your User model
// const Booking = require("../models/Booking"); // Your Booking model

// // Middleware for authentication (if needed)
// const authenticateUser = require("../middleware/authMiddleware");

// // Get user profile and bookings
// router.get("/profile", authenticateUser, async (req, res) => {
//    try {
//       const user = await User.findById(req.user.id).select("-password"); // Exclude password
//       const bookings = await Booking.find({ userId: req.user.id });

//       if (!user) {
//          return res.status(404).json({ message: "User not found" });
//       }

//       res.json({ user, bookings });
//    } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//    }
// });

// module.exports = router;
