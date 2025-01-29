import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";
import movies from "../movies.js";

export default {
  getAll(filter = {}) {
    let query = Movie.find({});

    if (filter.search) {
      //TODO fix partial case-insensitive search
      query = query.where({ title: filter.search });
    }

    if (filter.genre) {
      //TODO add case insensitive search
      query = query.where({ genre: filter.genre });
    }

    if (filter.year) {
      query = query.where({ year: Number(filter.year) });
    }
    return query;
  },

  getOne(movieId) {
    const result = Movie.findById(movieId).lean();

    return result;
  },
  create(movieData) {
    
    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });

    return newId;
  },
};
