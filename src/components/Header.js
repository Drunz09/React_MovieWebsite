import { getAllMovie, getTvSeries } from "../api";

const Header = ({ setListMovie, setMovieHeader }) => {
  const allMovie = () => {
    getAllMovie().then((result) => {
      setListMovie(result);
    });
    setMovieHeader("Movie : Playing Now");
  };

  const allTvSeries = () => {
    getTvSeries().then((result) => {
      setListMovie(result);
    });

    setMovieHeader("Series On Air");
  };

  return (
    <nav>
      <div className="nav-logo">
        Movie<span>WebsDB</span>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li onClick={() => allMovie()}>Movie</li>
          <li onClick={() => allTvSeries()}>Series</li>
        </ul>
      </div>
      <div className="nav-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
