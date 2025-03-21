import Support from "../models/support.js";


// Submit a support request 
export const submitSupportForm = async (req, res) => {
   try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
         return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      const newSupportRequest = new Support({ name, email, message });
      await newSupportRequest.save();

      res.status(201).json({ success: true, message: 'Your support request has been submitted successfully!' });
   } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
   }
};

// Get all support requests (for admin)
export const getAllSupportRequests = async (req, res) => {
   try {
      const requests = await Support.find();
      res.status(200).json({ success: true, data: requests });
   } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
   }
};
