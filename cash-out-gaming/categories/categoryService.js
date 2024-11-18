import { Category } from './category';

const categoryService = {
  async getCategories() {
    return await Category.find().exec();
  },

  async getCategory(id) {
    return await Category.findById(id).exec();
  },

  async createCategory(name, description) {
    const categoryDoc = new Category({ name, description });
    return await categoryDoc.save();
  },

  async updateCategory(id, name, description) {
    const categoryDoc = await Category.findById(id).exec();
    categoryDoc.name = name;
    categoryDoc.description = description;
    return await categoryDoc.save();
  },

  async deleteCategory(id) {
    return await Category.findByIdAndRemove(id).exec();
  },
};

export default categoryService;