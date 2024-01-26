import Product from "../models/productModel.js";

class ProductService {
  static create = async (data) => {
    const newProduct = await Product.create(data);
    return newProduct;
  };

  static getAll = async () => {
    const products = await Product.find({}).lean();
    return products;
  };

  static getProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
  };

  static update = async (id, data) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, data);
    return updatedProduct;
  };

  static delete = async (id) => {
    await Product.findByIdAndDelete(id);
    return;
  };
}

export default ProductService;
