const connection = require('./db');
const sql = connection();

/* Constructor to initialize category with category_name, category_description, 
and category_creation_date as its properties */
const Category = (category_name, category_description, category_creation_date) => {
  return {
    category_name: category_name,
    category_description: category_description,
    category_creation_date: category_creation_date,
  };
};

/* 
  create should be a function that calls the query function on sql object
  to persist category data in MySQL notesdb schema using insert query
*/
Category.create = async (categoryData) => {
  const query = 'INSERT INTO category SET ?';
  try {
    const result = await sql.query(query, categoryData);
    console.log('Category inserted successfully');
  } catch (error) {
    console.error('Error inserting category:', error);
  }
};

/* 
  findById should be a function that calls the query function on sql object 
  to fetch the category by the provided Id from the notesdb schema using select query
*/
Category.findById = async (categoryId) => {
  const query = 'SELECT * FROM category WHERE id = ?';
  try {
    const result = await sql.query(query, categoryId);
    if (result.length > 0) {
      console.log('Category found:', result[0]);
    } else {
      console.log('Category not found');
    }
  } catch (error) {
    console.error('Error fetching category:', error);
  }
};

/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the categories or categories with specific name from the notesdb 
  schema using select query
*/
Category.getAll = async (categoryName = null) => {
  let query = 'SELECT * FROM category';
  let params = [];

  if (categoryName) {
    query += ' WHERE category_name = ?';
    params.push(categoryName);
  }

  try {
    const result = await sql.query(query, params);
    console.log('Categories retrieved successfully:', result);
  } catch (error) {
    console.error('Error retrieving categories:', error);
  }
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the category for the given id from the notesdb schema using update query
*/
Category.updateById = async (categoryId, categoryData) => {
  const query = 'UPDATE category SET ? WHERE id = ?';
  try {
    const result = await sql.query(query, [categoryData, categoryId]);
    console.log('Category updated successfully');
  } catch (error) {
    console.error('Error updating category:', error);
  }
};

/* 
  remove should be a function that calls query function on sql object 
  to delete the category for the given id from the notesdb schema using delete query
*/
Category.remove = async (categoryId) => {
  const query = 'DELETE FROM category WHERE id = ?';
  try {
    const result = await sql.query(query, categoryId);
    console.log('Category deleted successfully');
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the categories from the notesdb schema using delete query
*/
Category.removeAll = async () => {
  const query = 'DELETE FROM category';
  try {
    const result = await sql.query(query);
    console.log('All categories deleted successfully');
  } catch (error) {
    console.error('Error deleting categories:', error);
  }
};

module.exports = Category;
