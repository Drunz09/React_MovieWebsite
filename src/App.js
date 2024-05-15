import "./App.css";
import { useState, useEffect } from "react";
import { getMovieList } from "./api";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import Pagination from "./components/Pagination";

const App = () => {
  const [listMovie, setListMovie] = useState([]);
  const [movieHeader, setMovieHeader] = useState("Popular Now");

  useEffect(() => {
    getMovieList().then((result) => {
      setListMovie(result);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const lasPostIndex = currentPage * postPerPage;
  const firsPostIndex = lasPostIndex - postPerPage;
  const currentPost = listMovie.slice(firsPostIndex, lasPostIndex);

  return (
    <div className="App">
      <header className="App-header">
        <Header setListMovie={setListMovie} setMovieHeader={setMovieHeader} />
      </header>
      <main>
        <SearchMovie setListMovie={setListMovie} setMovieHeader={setMovieHeader} />
        <section className="movie-container">
          <div className="movie-header">{movieHeader}</div>
          <Pagination totalPost={listMovie.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPostPerPage={setPostPerPage} />
          <MovieList currentPost={currentPost} />
        </section>
      </main>
    </div>
  );
};

export default App;
