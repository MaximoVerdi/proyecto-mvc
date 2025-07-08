import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: Number,
  genre: String,
  available: { type: Boolean, default: true }
});

export const Book = mongoose.model('Book', bookSchema);
