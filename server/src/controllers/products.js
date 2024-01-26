import { StatusCodes } from "http-status-codes";
import ProductService from "../services/product.js";
import { formatImage } from "../middlewares/multerMiddleware.js";
import { v2 as cloudinary } from "cloudinary";

class ProductController {
  static createNewProduct = async (req, res) => {
    if (req.file) {
      const file = formatImage(req.file);
      const response = cloudinary.uploader.upload(file);
      const imageUrl = (await response).secure_url;
      const publicId = (await response).public_id;
      req.body.image = imageUrl;
      req.body.imagePublicId = publicId;
    }

    const newProduct = await ProductService.create(req.body);

    res
      .status(StatusCodes.CREATED)
      .json({ message: "create success", metadata: { product: newProduct } });
  };

  static getAllProducts = async (req, res) => {
    const products = await ProductService.getAll();

    res.json({ message: "Success", metadata: { products: products } });
  };

  static getProduct = async (req, res) => {
    const product = await ProductService.getProductById(req.params.id);
    res.json({ message: "Got one product.", metadata: { product } });
  };

  static updateProduct = async (req, res) => {
    if (req.file) {
      const file = formatImage(req.file);
      const response = cloudinary.uploader.upload(file);
      const imageUrl = (await response).secure_url;
      const publicId = (await response).public_id;
      req.body.image = imageUrl;
      req.body.imagePublicId = publicId;
    }

    const updatedProduct = await ProductService.update(req.params.id, req.body);

    if (req.file && updatedProduct.imagePublicId) {
      await cloudinary.uploader.destroy(updatedProduct.imagePublicId);
    }

    res.json({
      message: "updated success",
      metadata: {},
    });
  };

  static deleteProduct = async (req, res) => {
    await ProductService.delete(req.params.id);

    res
      .status(StatusCodes.OK)
      .json({ message: "deleted success", metadata: {} });
  };
}

export default ProductController;
