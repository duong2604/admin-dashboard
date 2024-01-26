import mongoose from "mongoose";

const COLLECTION_NAME = "Products";
const DOCUMENT_NAME = "Product";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    imagePublicId: String,
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

export default mongoose.model(DOCUMENT_NAME, productSchema);
