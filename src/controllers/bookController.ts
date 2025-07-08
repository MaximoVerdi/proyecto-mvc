import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener libros' });
  }
};

