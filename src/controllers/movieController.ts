import { Request, Response } from 'express';
import Movie from '../models/movieModel';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  }catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const searchMovies = async (req: Request, res: Response) => {
  const query = req.query.q as string;
  try {
    const movies = await Movie.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } },
      ],
    });
    
    if(movies.length === 0){
      res.status(200).json("No data found with this name, try with another input");
    }else{
      res.status(200).json(movies);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
  
};

export const addMovie = async (req: Request, res: Response) => {
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const newMovie = new Movie({ title, genre, rating, streamingLink });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const movieId = req.params.id;
  const movies = await Movie.findById(movieId);
  if(movies === null){
    res.status(200).json("No data found with this ");
  }
  else {
    const { title, genre, rating, streamingLink } = req.body;
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        movieId,
        { title, genre, rating, streamingLink },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    }
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const movieId = req.params.id;
  try {
    const findMovie = await Movie.findByIdAndDelete(movieId);
    if(findMovie === null){
      res.status(200).json({ message: 'Movie Details not availble' });
    }
    else{
      res.status(200).json({ message: 'Movie deleted successfully' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
