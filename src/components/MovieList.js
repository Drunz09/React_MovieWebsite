const MovieList = ({ currentPost }) => {
  if (currentPost.length === 0) {
    return (
      <div className="movie-none">
        <h1>Movie Not Found</h1>
      </div>
    );
  } else {
    return currentPost.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-name">{movie.title ? movie.title : movie.original_name}</div>
          <img className="movie-image" src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`} alt="" />
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">⭐{movie.vote_average}</div>
          <div className="movie-preview">{movie.overview}</div>
        </div>
      );
    });
  }
};

export default MovieList;
