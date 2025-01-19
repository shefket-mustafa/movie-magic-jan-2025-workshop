import { Router } from "express";
import movieService from "../services/movie-service.js";

const movieController = Router();

movieController.get('/create', (req,res)=>{
  res.render('create');
});

movieController.get('/:movieId/details', (req,res)=>{
  
  const movieId = req.params.movieId;
  console.log(movieId);
  //TODO Get movie data for movie id
  const movie = movieService.findOne(movieId);
  
  console.log(movie);

  res.render('details');
});


export default movieController;