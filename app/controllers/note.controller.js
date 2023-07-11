const noteService = require("../service/note.service.js");

/* Call the create method of noteService object and return the result back*/
exports.create = async (note_title, note_content, note_status, note_creation_date, note_id, reminder_id) => {
  try {
    const result = await noteService.create(note_title, note_content, note_status, note_creation_date, note_id, reminder_id);
    return result;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

/* Call the getAll method of noteService object and return the result back */
exports.findAll = async (title) => {
  try {
    const result = await noteService.getAll(title);
    return result;
  } catch (error) {
    console.error('Error retrieving notes:', error);
    throw error;
  }
};

/* Call the findById method of noteService object and return the result back */
exports.findOne = async (noteId) => {
  try {
    const result = await noteService.findById(noteId);
    return result;
  } catch (error) {
    console.error('Error finding note by id:', error);
    throw error;
  }
};

/* Call the updateById method of noteService object and return the result back */
exports.update = async (id, updatedNote) => {
  try {
    const result = await noteService.updateById(id, updatedNote);
    return result;
  } catch (error) {
    console.error('Error updating note by id:', error);
    throw error;
  }
};

/* Call the remove method of noteService object and return the result back */
exports.delete = async (id) => {
  try {
    const result = await noteService.remove(id);
    return result;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

/* Call the removeAll method of noteService object and return the result back */
exports.deleteAll = async () => {
  try {
    const result = await noteService.removeAll();
    return result;
  } catch (error) {
    console.error('Error deleting all notes:', error);
    throw error;
  }
};
