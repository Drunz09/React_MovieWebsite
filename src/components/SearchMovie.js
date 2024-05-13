import { useRef } from "react";
import { searchMovieList } from "../api";
import { getMovieList } from "../api";

const SearchMovie = ({ setListMovie, setMovieHeader }) => {
  const getInput = useRef();
  const getButton = useRef();

  const search = async (q) => {
    if (q.length > 1) {
      getButton.current.style.display = "inline";
      setMovieHeader(`Searching : ${q}`);
    } else {
      getButton.current.style.display = "none";
    }
    if (q.length > 3) {
      const query = await searchMovieList(q);
      setListMovie(query);
    } else {
      setMovieHeader(`Playing Now`);
      getMovieList().then((result) => {
        setListMovie(result);
      });
    }
  };

  const reset = () => {
    getInput.current.value = "";
    getButton.current.style.display = "none";
    setMovieHeader("Popular Now");
    getMovieList().then((result) => {
      setListMovie(result);
    });
  };

  return (
    <section className="search-movie">
      <input
        type="text"
        placeholder="Search Movie"
        ref={getInput}
        onChange={({ target }) => {
          search(target.value);
        }}
      />
      <button ref={getButton} onClick={() => reset()}>
        Reset
      </button>
    </section>
  );
};

export default SearchMovie;
