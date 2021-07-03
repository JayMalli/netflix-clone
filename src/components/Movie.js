import { useGlobalContext } from "../context";
const Movie = ({ movie }) => {
  const { handelClick } = useGlobalContext();
  return (
    <>
      <div className="movie">
        <div className="movie-img">
          <img src={movie.img1} alt="" onClick={() => handelClick(movie)} />
        </div>
      </div>
    </>
  );
};

export default Movie;
