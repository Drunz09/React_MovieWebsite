import { useRef } from "react";
import { getAllMovie, getTvSeries } from "../api";

const Header = ({ setListMovie, setMovieHeader }) => {
  const getList = useRef();

  const allMovie = () => {
    getAllMovie().then((result) => {
      setListMovie(result);
    });
    setMovieHeader("Movie : Playing Now");
    getList.current.classList.remove("hidden");
  };

  const allTvSeries = () => {
    getTvSeries().then((result) => {
      setListMovie(result);
    });

    setMovieHeader("Series On Air");
    getList.current.classList.remove("hidden");
  };

  const showList = () => {
    getList.current.classList.toggle("hidden");
  };

  return (
    <nav>
      <div className="nav-logo">
        Movie<span>WebsDB</span>
      </div>
      <div className="nav-list" ref={getList}>
        <ul>
          <li>
            <a href="../App.js">Home</a>
          </li>
          <li onClick={() => allMovie()}>Movie</li>
          <li onClick={() => allTvSeries()}>Series</li>
        </ul>
      </div>
      <div className="nav-hamburger" onClick={() => showList()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
