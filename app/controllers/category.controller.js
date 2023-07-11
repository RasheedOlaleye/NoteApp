const categoryService = require("../service/category.service.js");

/* Call the create method of categoryService object and return the result back*/
exports.create = async (category_name, category_description) => {
  try {
    const result = await categoryService.create(category_name, category_description);
    return result;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

/* Call the getAll method of categoryService object and return the result back */
exports.findAll = async () => {
  try {
    const result = await categoryService.getAll();
    return result;
  } catch (error) {
    console.error('Error fetching all categories:', error);
    throw error;
  }
};

/* Call the findById method of categoryService object and return the result back */
exports.findOne = async (id) => {
  try {
    const result = await categoryService.findById(id);
    return result;
  } catch (error) {
    console.error('Error finding category by id:', error);
    throw error;
  }
};

/* Call the updateById method of categoryService object and return the result back */
exports.update = async (id, updateData) => {
  try {
    const result = await categoryService.updateById(id, updateData);
    return result;
  } catch (error) {
    console.error('Error updating category by id:', error);
    throw error;
  }
};

/* Call the remove method of categoryService object and return the result back */
exports.delete = async (id) => {
  try {
    const result = await categoryService.remove(id);
    return result;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

/* Call the removeAll method of categoryService object and return the result back */
exports.deleteAll = async () => {
  try {
    const result = await categoryService.removeAll();
    return result;
  } catch (error) {
    console.error('Error deleting all categories:', error);
    throw error;
  }
};
