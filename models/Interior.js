import mongoose from "mongoose";

const interior = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  baths: { type: Number, required: true },
  urls: [{ type: String, required: true }], // array of image URLs 
});

export default mongoose.model("Interior", interior);