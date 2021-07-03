import Movie from "./Movie";
const MoviesTypes = ({ movies, header }) => {
  return (
    <div className="movies-list">
      <h2 className="movies-header">{header}</h2>
      <div className="movies">
        {movies.map((item) => {
          return <Movie key={item.id} movie={item}></Movie>;
        })}
      </div>
    </div>
  );
};

export default MoviesTypes;
