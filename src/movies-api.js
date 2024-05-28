import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const ACCESS_KEY = '0f067bee4ef5fb92459c287b7eeb2984';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQwNzdhYzRiOTkzNDdjNGYxYjhiNDFjMWRhZjZlZiIsInN1YiI6IjY2NTIwNjEyN2Y5ZTQ4NzYzMjE3MGQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pzu1ljKAPrNdD_0cwqN4gAs27iEgUDX_JXxL4NZnQpQ',
  },
  params: {
    // api_key: ACCESS_KEY,
    page: 1,
    include_adult: false,
    language: 'en-US',
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(`3/trending/movie/day`, options);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`3/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCastById = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/credits`, options);
  return response.data;
};

export const fetchMovieReviewsById = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, options);
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`3/search/movie?query=${query}`, options);
  return response.data;
};