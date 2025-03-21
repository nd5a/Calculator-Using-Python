import mongoose from 'mongoose';

const supportSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      message: {
         type: String,
         required: true
      },
   },
   { timestamps: true } // Adds createdAt and updatedAt timestamps
);

export default mongoose.model('Support', supportSchema);
