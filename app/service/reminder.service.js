const reminderDAO = require('../dao/reminder.dao')

/* Create and Save a new Reminder by calling reminderDAO create method.
   Depending on the return value, it should return the results or the error message*/  
   

   /* Create and Save a new Reminder by calling reminderDAO create method.
      Depending on the return value, it should return the results or the error message*/  
   exports.create = async (reminder_name, reminder_description, reminder_creation_date) => {
     try {
       await reminderDAO.create(reminder_name, reminder_description, reminder_creation_date);
       return 'Reminder created successfully';
     } catch (error) {
       console.error('Error creating reminder:', error);
       throw error;
     }
   };
   

   /* Retrieve all reminders by calling reminderDAO getAll method.
    Depending on the return value, it should return the results or the error message*/  
    exports.getAll = async (title) => {
      try {
        const reminders = await reminderDAO.getAll(title);
        return reminders;
      } catch (error) {
        console.error('Error retrieving reminders:', error);
        throw error;
      }
    };
   
   /* Find a single Reminder by Id by calling reminderDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
   exports.findById = async (id) => {
      try {
        const reminder = await reminderDAO.findById(id);
        return reminder;
      } catch (error) {
        console.error('Error finding reminder by id:', error);
        throw error;
      }
    };
    
   /* Update a Reminder identified by the id by calling reminderDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
   exports.updateById = async (id, updateData) => {
      try {
        await reminderDAO.updateById(id, updateData);
        return 'Reminder updated successfully';
      } catch (error) {
        console.error('Error updating reminder by id:', error);
        throw error;
      }
    };
   
/* Delete a Reminder with the specified id by calling reminderDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
   exports.remove = async (id) => {
      try {
        await reminderDAO.remove(id);
        return 'Reminder deleted successfully';
      } catch (error) {
        console.error('Error deleting reminder:', error);
        throw error;
      }
    };
    
    /* Delete all Reminders by calling reminderDAO removeAll method.
       Depending on the return value, it should return the results or the error message*/  
    exports.removeAll = async () => {
      try {
        await reminderDAO.removeAll();
        return 'All reminders deleted successfully';
      } catch (error) {
        console.error('Error deleting all reminders:', error);
        throw error;
      }
    };
   
/* Delete a Reminder with the specified id by calling reminderDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
exports.remove = async (id) => {
   try {
     await reminderDAO.remove(id);
     return 'Reminder deleted successfully';
   } catch (error) {
     console.error('Error deleting reminder:', error);
     throw error;
   }
 };
 
 /* Delete all Reminders by calling reminderDAO removeAll method.
    Depending on the return value, it should return the results or the error message*/  
 exports.removeAll = async () => {
   try {
     await reminderDAO.removeAll();
     return 'All reminders deleted successfully';
   } catch (error) {
     console.error('Error deleting all reminders:', error);
     throw error;
   }
 };
    
    
    
    
    