import { useGlobalContext } from "../context";

const FilterMovies = ({ movies, header }) => {
  const { handelFilterClick } = useGlobalContext();

  if (movies.length < 1) {
    return (
      <>
        <h2 className="movies-header">{header}</h2>
        <h2>Sorry, no results found.</h2>
      </>
    );
  }

  return (
    <div className="movies-list">
      <h2 className="movies-header">{header}</h2>
      <div className="filter-movies">
        {movies.map((item) => {
          return (
            <div className="movie" key={item.id}>
              <div className="movie-img">
                <img
                  src={item.img1}
                  alt=""
                  onClick={() => handelFilterClick(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMovies;
