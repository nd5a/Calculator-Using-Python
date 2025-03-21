import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
   try {
      // Decode and sanitize the title
      const tourTitle = decodeURIComponent(req.params.title).trim();
      const { username, reviewText, rating } = req.body;

      // 🔥 Validate input fields
      if (!username || !reviewText || !rating) {
         return res.status(400).json({ success: false, message: "All fields (username, reviewText, rating) are required!" });
      }

      // 🔥 Fix: Case-insensitive, space-tolerant search
      const tour = await Tour.findOne({ title: { $regex: new RegExp(`^${tourTitle}$`, "i") } });

      if (!tour) {
         return res.status(404).json({ success: false, message: `Tour "${tourTitle}" not found!` });
      }

      // 🔥 Create a new review object
      const newReview = new Review({
         productId: tour._id,
         username,
         reviewText,
         rating
      });

      // Save the review
      const savedReview = await newReview.save();

      // 🔥 Ensure reviews array stores objects, not just IDs
      tour.reviews.push(savedReview); // Push entire review object
      await tour.save();

      res.status(201).json({ success: true, message: "Review submitted successfully!", data: savedReview });
   } catch (error) {
      console.error("Error in createReview:", error);
      res.status(500).json({ success: false, message: "Failed to submit review", error: error.message });
   }
};
