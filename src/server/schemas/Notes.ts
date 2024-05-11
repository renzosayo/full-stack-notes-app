import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: String,
  body: String,
  dateWritten: Date,
});

export default mongoose.model("notes", NoteSchema);
