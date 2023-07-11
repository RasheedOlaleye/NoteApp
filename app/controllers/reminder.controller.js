const reminderService = require("../service/reminder.service.js");

/* Call the create method of reminderService object and return the result back*/
exports.create = async (reminderData) => {
  try {
    const result = await reminderService.create(reminderData);
    return result;
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};

/* Call the getAll method of reminderService object and return the result back*/
exports.findAll = async () => {
  try {
    const result = await reminderService.getAll();
    return result;
  } catch (error) {
    console.error('Error fetching all reminders:', error);
    throw error;
  }
};

/* Call the findById method of reminderService object and return the result back*/
exports.findOne = async (id) => {
  try {
    const result = await reminderService.findById(id);
    return result;
  } catch (error) {
    console.error('Error finding reminder by id:', error);
    throw error;
  }
};

/* Call the updateById method of reminderService object and return the result back*/
exports.update = async (id, updateData) => {
  try {
    const result = await reminderService.updateById(id, updateData);
    return result;
  } catch (error) {
    console.error('Error updating reminder by id:', error);
    throw error;
  }
};

/* Call the remove method of reminderService object and return the result back*/
exports.delete = async (id) => {
  try {
    const result = await reminderService.remove(id);
    return result;
  } catch (error) {
    console.error('Error deleting reminder:', error);
    throw error;
  }
};

/* Call the removeAll method of reminderService object and return the result back*/
exports.deleteAll = async () => {
  try {
    const result = await reminderService.removeAll();
    return result;
  } catch (error) {
    console.error('Error deleting all reminders:', error);
    throw error;
  }
};
