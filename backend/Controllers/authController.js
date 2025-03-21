import User from "../models/User.js";

// User Registration
export const register = async (req, res) => {
   try {
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password, // Storing password as plain text (Not Recommended)
      });

      await newUser.save();

      res.status(200).json({ success: true, message: "Successfully registered!", user: newUser });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to register! Try again." });
   }
};

// User Login
export const login = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      // If user doesn't exist
      if (!user) {
         return res.status(404).json({ success: false, message: "User not found!" });
      }

      // Simple password check (since hashing is removed)
      if (password !== user.password) {
         return res.status(401).json({ success: false, message: "Incorrect email or password!" });
      }

      // Send user data to frontend (excluding password)
      const { password: _, ...rest } = user._doc;

      res.status(200).json({ success: true, message: "Successfully logged in!", user: rest });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to login" });
   }
};
