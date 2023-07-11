const connection = require('./db');
sql = connection();

/* constructor to initialize reminder with reminder_name, reminder_description and
reminder_creation_date as its properties*/

const Reminder = (reminder_name,reminder_description,reminder_creation_date)=>{
  return{
reminder_name :reminder_name,
reminder_description:reminder_description,
reminder_creation_dat: reminder_creation_date
  }
};


/* 
  create should be a function that calls the query function on sql object
  to persist reminder data in MySQL notesdb schema using insert query
*/

Reminder.create = async (reminder_name, reminder_description, reminder_creation_date) => {
  try {
    const insertQuery = `INSERT INTO reminders (name, description, creation_date) VALUES (?, ?, ?)`;
    const values = [reminder_name, reminder_description, reminder_creation_date];

    // Execute the query
    await sql.query(insertQuery, values);

    console.log('Reminder created successfully');
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};



/* 
  findById should be a function that calls the query function on sql object 
  to fetch the reminder by the provided Id from the notesdb schema using select query
*/

Reminder.findById = async (id) => {
  try {
    const selectQuery = 'SELECT * FROM reminders WHERE id = ?';
    const values = [id];

    const [results] = await sql.query(selectQuery, values);

    if (results.length === 0) {
      return null; // No reminder found with the provided id
    }

    const reminder = results[0];
    return {
      id: reminder.id,
      reminder_name: reminder.name,
      reminder_description: reminder.description,
      reminder_creation_date: reminder.creation_date,
    };
  } catch (error) {
    console.error('Error fetching reminder by id:', error);
    throw error;
  }
};


/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the reminders or reminders with specific title from the notesdb 
  schema using select query
*/

Reminder.getAll  = async (title) => {
  const query = `SELECT * FROM reminders ${title ? 'WHERE name = ?' : ''}`;
  const values = title ? [title] : [];
  const [results] = await sql.query(query, values);

  return results.map(({ id, name, description, creation_date }) => ({
    id,
    reminder_name: name,
    reminder_description: description,
    reminder_creation_date: creation_date,
  }));
};


/* 
  updateById should be a function that calls query function on sql object 
  to update the reminder for the given id from the notesdb schema using update query
*/

Reminder.updateById = async (id, updateData) => {
  try {
    const updateQuery = 'UPDATE reminders SET ? WHERE id = ?';
    const result = await sql.query(updateQuery, [updateData, id]);

    console.log('Reminder updated successfully');
  } catch (error) {
    console.error('Error updating reminder by id:', error);
    throw error;
  }
};


/* 
  remove should be a function that calls query function on sql object 
  to delete the reminder for the given id from the notesdb schema using delete query
*/
Reminder.remove = async (id) => {
  try {
    const deleteQuery = 'DELETE FROM reminders WHERE id = ?';
    const result = await sql.query(deleteQuery, id);

    console.log('Reminder deleted successfully');
  } catch (error) {
    console.error('Error deleting reminder:', error);
    throw error;
  }
};


/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the reminders from the notesdb schema using delete query
*/
Reminder.removeAll = async () => {
  try {
    const deleteQuery = 'DELETE FROM reminders';
    const result = await sql.query(deleteQuery);

    console.log('All reminders deleted successfully');
  } catch (error) {
    console.error('Error deleting all reminders:', error);
    throw error;
  }
};


module.exports = Reminder;
