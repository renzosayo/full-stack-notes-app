const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: String,
  body: String,
  dateWritten: Date,
});

module.exports = mongoose.model("notes", NoteSchema);
