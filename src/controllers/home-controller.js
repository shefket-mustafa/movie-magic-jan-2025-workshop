import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res)=>{
  //Second solutions use.lean() on query to get plain objects
  const movies = await movieService.getAll().lean();

  //First solution - convert documents to objects
  //Convert documents to plain objects
  // const plainMovies = movies.map(m => m.toObject());

  res.render('home', {  movies });
});

router.get('/about', (req, res)=>{
  res.render('about');
});

export default router;