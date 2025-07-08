import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener libros' });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Libro no encontrado' });

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al buscar libro' });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error al crear libro' });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ success: false, message: 'Libro no encontrado' });

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error al actualizar libro' });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Libro no encontrado' });

    res.status(200).json({ success: true, message: 'Libro eliminado' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar libro' });
  }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook }