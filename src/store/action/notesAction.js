export const  deleteNote = (noteId) => ({
    type: 'DELETE_NOTES',
    payload: noteId
})

export const  addNote = (notes) => ({
    type: 'ADD_NOTES',
    payload: notes
})

export const  editNote = (notes) => ({
    type: 'EDIT_NOTE',
    payload: notes
})