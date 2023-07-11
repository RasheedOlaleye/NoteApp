const categoryDAO = require('../dao/category.dao');

/* Create and Save a new Category by calling categoryDAO create method.
   Depending on the return value, it should return the results or the error message*/  
exports.create = async (category_name, category_description) => {
  try {
    const result = await categoryDAO.create(category_name, category_description);
    return result;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

/* Retrieve all categories by calling categoryDAO getAll method.
   Depending on the return value, it should return the results or the error message*/  
exports.getAll = async () => {
  try {
    const categories = await categoryDAO.getAll();
    return categories;
  } catch (error) {
    console.error('Error retrieving categories:', error);
    throw error;
  }
};

/* Find a single Category by Id by calling categoryDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
exports.findById = async (id) => {
  try {
    const category = await categoryDAO.findById(id);
    return category;
  } catch (error) {
    console.error('Error finding category by id:', error);
    throw error;
  }
};

/* Update a Category identified by the id by calling categoryDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
exports.updateById = async (id, updateData) => {
  try {
    await categoryDAO.updateById(id, updateData);
    return 'Category updated successfully';
  } catch (error) {
    console.error('Error updating category by id:', error);
    throw error;
  }
};

/* Delete a Category with the specified id by calling categoryDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
exports.remove = async (id) => {
  try {
    await categoryDAO.remove(id);
    return 'Category deleted successfully';
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

/* Delete all Categories by calling categoryDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/  
exports.removeAll = async () => {
  try {
    await categoryDAO.removeAll();
    return 'All categories deleted successfully';
  } catch (error) {
    console.error('Error deleting all categories:', error);
    throw error;
  }
};
