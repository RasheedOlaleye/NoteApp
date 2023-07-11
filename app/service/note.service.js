const noteDAO = require('../dao/note.dao');

/* Create and Save a new Note by calling noteDAO create method.
   Depending on the return value, it should return the results or the error message*/  
exports.create = async (note_title, note_content, note_status, note_creation_date, note_id, reminder_id) => {
  try {
    const note = new noteDAO.Note(
      note_title,
      note_content,
      note_status,
      note_creation_date,
      note_id,
      reminder_id
    );
    await note.create();
    return 'Note created successfully';
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

/* Retrieve all notes by calling noteDAO getAll method.
   Depending on the return value, it should return the results or the error message*/  
exports.getAll = async (title) => {
  try {
    const notes = await noteDAO.getAll(title);
    return notes;
  } catch (error) {
    console.error('Error retrieving notes:', error);
    throw error;
  }
};

/* Find a single Note by Id by calling noteDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
exports.findById = async (noteId) => {
  try {
    const note = await noteDAO.findById(noteId);
    return note;
  } catch (error) {
    console.error('Error finding note by id:', error);
    throw error;
  }
};

/* Update a Note identified by the id by calling noteDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
exports.updateById = async (id, updatedNote) => {
  try {
    await noteDAO.updateById(id, updatedNote);
    return 'Note updated successfully';
  } catch (error) {
    console.error('Error updating note by id:', error);
    throw error;
  }
};

/* Delete a Note with the specified id by calling noteDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
exports.remove = async (id) => {
  try {
    await noteDAO.remove(id);
    return 'Note deleted successfully';
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

/* Delete all Notes by calling noteDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/  
exports.removeAll = async () => {
  try {
    await noteDAO.removeAll();
    return 'All notes deleted successfully';
  } catch (error) {
    console.error('Error deleting all notes:', error);
    throw error;
  }
};
