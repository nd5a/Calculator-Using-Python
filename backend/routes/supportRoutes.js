import express from 'express';
import { submitSupportForm, getAllSupportRequests } from '../Controllers/supportController.js';

const router = express.Router();

router.post('/submit', submitSupportForm); // Submit support form
router.get('/requests', getAllSupportRequests); // Get all support requests (admin only)

export default router;
