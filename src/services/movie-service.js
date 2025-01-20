import movies from "../movies.js";
import { v4 as uuid } from 'uuid';


export default {
   findOne(movieId) {
//TODO if movie is missing?

const result = movies.find(movie => movie.id === movieId);

return result;
  },
  create(movieData){
    //TODO add id's
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData
    });

    return newId;
  }
  
};