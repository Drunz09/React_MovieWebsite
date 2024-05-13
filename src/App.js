import "./App.css";
import { useState, useEffect } from "react";
import { getMovieList } from "./api";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";

const App = () => {
  const [listMovie, setListMovie] = useState([]);
  const [movieHeader, setMovieHeader] = useState("Popular Now");

  useEffect(() => {
    getMovieList().then((result) => {
      setListMovie(result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header setListMovie={setListMovie} setMovieHeader={setMovieHeader} />
      </header>
      <main>
        <SearchMovie setListMovie={setListMovie} setMovieHeader={setMovieHeader} />
        <section className="movie-container">
          <div className="movie-header">{movieHeader}</div>
          <MovieList listMovie={listMovie} />
        </section>
      </main>
    </div>
  );
};

export default App;
