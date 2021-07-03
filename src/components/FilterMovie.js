import StyledMovie from "./StyledMovie";

const FilterSingleMovie = ({ item }) => {
  const { title, img2, description, genre } = item;
  return (
    <div className="movie-details">
      <StyledMovie img={img2}>
        <div className="movieItem" key={item.id}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="movie-genre">
            <span className="movie-genre-btn"> </span>
            {genre}
          </div>
          <button type="button" className="btn">
            Play
          </button>
        </div>
      </StyledMovie>
    </div>
  );
};

export default FilterSingleMovie;
