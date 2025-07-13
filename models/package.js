// models/Package.js 
import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  Square_feets: { type: Number, required: true },
  bedrooms_ground_floor: { type: Number },
  bedrooms_first_floor: { type: Number },
  bedrooms_second_floor: { type: Number },
  bathrooms_ground_floor: { type: Number },
  bathrooms_first_floor: { type: Number },
  bathrooms_second_floor: { type: Number },
  urls: [{ type: String, required: true }] // Array of image URLs 
}, { timestamps: true });

export default mongoose.model('Package', packageSchema);
