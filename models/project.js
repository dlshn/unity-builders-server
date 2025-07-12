import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  urls: [String], // Image URLs from Cloudinary
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
