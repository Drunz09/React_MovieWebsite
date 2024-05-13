import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovieList = async (q) => {
  const s = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return s.data.results;
};

export const getAllMovie = async () => {
  const allMovie = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
  return allMovie.data.results;
};

export const getTvSeries = async () => {
  const series = await axios.get(`${baseUrl}/tv/on_the_air?api_key=${apiKey}`);
  return series.data.results;
  // console.log({ series: series });
};
