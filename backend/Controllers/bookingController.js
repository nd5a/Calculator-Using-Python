import Booking from './../models/Booking.js'

export const createBooking = async (req, res) => {
   try {
      const newBooking = new Booking(req.body);
      const savedBooking = await newBooking.save();
      res.status(200).json({ success: true, message: "Your tour is booked!", data: savedBooking });
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error!", error: error.message });
   }
};

// get single booking
export const getBooking = async(req,res) => {
   const id = req.params.id
   
   try {
      const book = await Booking.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   } 
} 


// get all booking
export const getAllBooking = async(req,res) => {
   
   try {
      const books = await Booking.find()

      res.status(200).json({success:true, message:"Successful!", data:books})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 