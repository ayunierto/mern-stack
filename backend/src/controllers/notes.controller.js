const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: [] })

notesCtrl.storeNotes = (req, res) => res.json({ message: 'Note Saved' })

notesCtrl.getNote = (req, res) => res.json({ title: 'Note number one' })

notesCtrl.updateNote = (req, res) => res.json({ message: 'Note Updated' })

notesCtrl.deleteNote = (req, res) => res.json({ message: 'Note Deleted' })

module.exports = notesCtrl;