const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage, setPostPerPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  const perPage = (e) => {
    if (e >= 3 && e <= 10) {
      setPostPerPage(e);
    }
  };

  return (
    <div className="movie-pagination">
      <label forhtml="showList">Show List : </label>
      <input type="number" name="list" id="showList" min="3" max="10" value={postPerPage} onChange={({ target }) => perPage(target.value)} />
      <br />
      {pages.map((page, index) => {
        return (
          <button onClick={() => setCurrentPage(page)} key={index} className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
      <br />
    </div>
  );
};

export default Pagination;
