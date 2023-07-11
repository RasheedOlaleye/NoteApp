const connection = require('./db');
var db = connection()

/*
variable to store connection object to perform CRUD operations using connection module
*/
var sql;

/* constructor to initialize note with note_title, note_content, note_status,
 note_creation_date,note_id and reminder_id  as its properties*/
 function Note(note_title, note_content, note_status, note_creation_date, note_id, reminder_id) {
  this.note_title = note_title;
  this.note_content = note_content;
  this.note_status = note_status;
  this.note_creation_date = note_creation_date;
  this.note_id = note_id;
  this.reminder_id = reminder_id;
}

/* 
  create should be a function that calls the query function on sql object to persist note 
  data in MySQL notesdb schema using insert query. Write separate insert queries to insert row
  in Note, NoteCategory and NoteReminder tables
*/

Note.create = async function() {
  const { note_title, note_content, note_status, note_creation_date, note_id, reminder_id } = this;

  const noteQuery = `INSERT INTO Note (note_title, note_content, note_status, note_creation_date, note_id)
                     VALUES (?, ?, ?, ?, ?)`;
  const noteValues = [note_title, note_content, note_status, note_creation_date, note_id];

  const categoryQuery = `INSERT INTO NoteCategory (note_id, category_id)
                         VALUES (?, ?)`;
  const categoryValues = [note_id, category_id]; // Replace category_id with the actual value

  const reminderQuery = `INSERT INTO NoteReminder (note_id, reminder_id)
                         VALUES (?, ?)`;
  const reminderValues = [note_id, reminder_id];

  try {
    await db.queryAsync(noteQuery, noteValues);
    await db.queryAsync(categoryQuery, categoryValues);
    await db.queryAsync(reminderQuery, reminderValues);

    console.log('Note created successfully!');
  } catch (err) {
    console.error('Error creating note:', err);
  }
};

/* 
  findById should be a function that calls the query function on sql object 
  to fetch the note by the provided Id from the notesdb schema using select query.
  Join queries should be used to join Note, NoteCategory and NoteReminder tables
*/

Note.findById = async (noteId) => {
  const selectQuery = `
    SELECT n.*, nc.category_id, nr.reminder_id
    FROM Note AS n
    LEFT JOIN NoteCategory AS nc ON n.note_id = nc.note_id
    LEFT JOIN NoteReminder AS nr ON n.note_id = nr.note_id
    WHERE n.note_id = ?
  `;
  const result = await db.queryAsync(selectQuery, [noteId]);

  if (result.length === 0) {
    return null;
  }

  const noteData = result[0];
  const note = new Note(
    noteData.note_title,
    noteData.note_content,
    noteData.note_status,
    noteData.note_creation_date,
    noteData.note_id,
    noteData.reminder_id
  );
  note.category_id = noteData.category_id;

  return note;
};



/* 
  getAll should be a function that calls the query function on sql object to fetch all 
  the notes or notes with specific title from the notesdb   schema using select query.
  Join queries should be used to join Note, NoteCategory and NoteReminder tables.
*/
Note.getAll = async (title) => {
  let selectQuery = `
    SELECT n.*, nc.category_id, nr.reminder_id
    FROM Note AS n
    LEFT JOIN NoteCategory AS nc ON n.note_id = nc.note_id
    LEFT JOIN NoteReminder AS nr ON n.note_id = nr.note_id
  `;

  const params = [];

  if (title) {
    selectQuery += ` WHERE n.note_title = ?`;
    params.push(title);
  }

  try {
    const results = await db.queryAsync(selectQuery, params);

    const notes = results.filter((noteData) => {
      const { note_title } = noteData;
      return note_title.toLowerCase() === title.toLowerCase();
    });

    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};
/* 
  updateById should be a function that calls query function on sql object 
  to update the note for the given id from the notesdb schema using update query
*/

Note.updateById = async (id, updatedNote) => {
  const { note_title, note_content, note_status, note_creation_date, reminder_id } = updatedNote;

  const updateQuery = `
    UPDATE Note
    SET
      note_title = ?,
      note_content = ?,
      note_status = ?,
      note_creation_date = ?,
      reminder_id = ?
    WHERE note_id = ?
  `;

  const updateValues = [note_title, note_content, note_status, note_creation_date, reminder_id, id];

  try {
    const result = await db.queryAsync(updateQuery, updateValues);
    console.log(`Note with ID ${id} updated successfully!`);
  } catch (error) {
    console.error(`Error updating note with ID ${id}:`, error);
    throw error;
  }
};


/* 
  remove should be a function that calls query function on sql object 
  to delete the note for the given id from the notesdb schema using delete query
*/
Note.remove = async (id) => {
  const deleteQuery = `DELETE FROM Note WHERE note_id = ?`;

  try {
    const result = await db.queryAsync(deleteQuery, [id]);
    console.log(`Note with ID ${id} deleted successfully!`);
  } catch (error) {
    console.error(`Error deleting note with ID ${id}:`, error);
    throw error;
  }
};
/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the notes from the notesdb schema using delete query
*/
Note.removeAll = async () => {
  const deleteQuery = `DELETE FROM Note`;

  try {
    const result = await db.queryAsync(deleteQuery);
    console.log(`All notes deleted successfully!`);
  } catch (error) {
    console.error(`Error deleting all notes:`, error);
    throw error;
  }
};

module.exports = Note;
