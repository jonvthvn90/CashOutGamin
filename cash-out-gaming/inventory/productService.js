import { Product } from './product';

const productService = {
  async getProducts() {
    return await Product.find().exec();
  },

  async getProduct(id) {
    return await Product.findById(id).exec();
  },

  async createProduct(name, description, price, quantity) {
    const product = new Product({ name, description, price, quantity });
    return await product.save();
  },

  async updateProduct(id, name, description, price, quantity) {
    const product = await Product.findById(id).exec();
    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    return await product.save();
  },

  async deleteProduct(id) {
    return await Product.findByIdAndRemove(id).exec();
  },
};

export default productService;