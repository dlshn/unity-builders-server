// models/Package.js 
import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  Square_feets: { type: String, required: true },
  location: { type: String },
  bedrooms_first_floor: { type: String },
  bedrooms_second_floor: { type: String },
  bathrooms_first_floor: { type: String },
  bathrooms_second_floor: { type: String },
  urls: [{ type: String, required: true }] // Array of image URLs
}, { timestamps: true });

export default mongoose.model('Package', packageSchema);
