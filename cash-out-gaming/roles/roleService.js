import { Role } from './role';

const roleService = {
  async getRoles() {
    return await Role.find().exec();
  },

  async getRole(id) {
    return await Role.findById(id).exec();
  },

  async createRole(name, description) {
    const roleDoc = new Role({ name, description });
    return await roleDoc.save();
  },

  async updateRole(id, name, description) {
    const roleDoc = await Role.findById(id).exec();
    roleDoc.name = name;
    roleDoc.description = description;
    return await roleDoc.save();
  },

  async deleteRole(id) {
    return await Role.findByIdAndRemove(id).exec();
  },
};

export default roleService;