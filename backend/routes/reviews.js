import express from "express";
import { createReview } from "../Controllers/reviewController.js";

const router = express.Router();

// Allow public access to post reviews
router.post("/:title", createReview);

export default router;
