import StyledBrowse from "../components/browse";
import { useGlobalContext } from "../context";
import SingleMovie from "../components/SingleMovie";
import MoviesTypes from "../components/MoviesTypes";
import logo from "../images/misc/logo-1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterMovies from "../components/FilterMovies";
import { BiSearchAlt2 } from "react-icons/bi";
import Footer from "../components/Footer";
const Browse = () => {
  const {
    childMovies,
    dramaMovies,
    romanceMovies,
    suspenseMovies,
    thrillerMovies,
    comedyMovies,
    crimeMovies,
    documentariesMovies,
    feelGoodMovies,
    cartoonMovies,
    filterMovies,
    signChild,
    signDrama,
    signRomance,
    signSuspense,
    signThriller,
    signComedy,
    signCrime,
    signDocumentaries,
    signFeelGood,
    signCartoon,
    signFilter,
    movieId,
    searchTerm,
    handelSearch,
    signFilterClick,
  } = useGlobalContext();
  const [ipShow, setipShow] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="browse-container">
        <StyledBrowse>
          <div className="browse-navbar">
            <div className="browse-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <form className="form" onSubmit={handelSubmit}>
              <label htmlFor="filter">
                <BiSearchAlt2
                  onClick={() => setipShow(!ipShow)}
                  className="icon"
                />
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={handelSearch}
                name="filter"
                id="filter"
                className={`${ipShow ? "input" : ""}`}
              />
            </form>
          </div>
          <div className="browse-item">
            <h1>Watch Joker Now</h1>
            <p>
              The film, based on DC Comics characters, stars Joaquin Phoenix as
              the Joker and provides a possible origin story for the character.
              Set in 1981, it follows Arthur Fleck, a failed clown and stand-up
              comedian whose descent into insanity and nihilism inspires a
              violent counter-cultural revolution against the wealthy in a
              decaying Gotham City.
            </p>
            <button type="button" className="btn browse-btn">
              Play
            </button>
          </div>
        </StyledBrowse>
      </div>
      {/* for filter movies */}
      {signFilter && (
        <div className="browse-movies">
          <FilterMovies header={"Search Results"} movies={filterMovies} />
        </div>
      )}
      {signFilterClick && (
        <div
          className={`${
            signFilter ? "single-movie show-movie" : "single-movie"
          }`}
        >
          {filterMovies.map((item) => {
            if (item.id === movieId) {
              return <SingleMovie item={item} key={item.id} />;
            }
            return [];
          })}
        </div>
      )}

      {/* for child */}
      <div className="browse-movies">
        <MoviesTypes header={"Children"} movies={childMovies} />
      </div>
      <div
        className={`${signChild ? "single-movie show-movie" : "single-movie"}`}
      >
        {childMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  drama*/}
      <div className="browse-movies">
        <MoviesTypes header={"Drama"} movies={dramaMovies} />
      </div>
      <div
        className={`${signDrama ? "single-movie show-movie" : "single-movie"}`}
      >
        {dramaMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  romance*/}
      <div className="browse-movies">
        <MoviesTypes header={"Romance"} movies={romanceMovies} />
      </div>
      <div
        className={`${
          signRomance ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {romanceMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  suspens*/}
      <div className="browse-movies">
        <MoviesTypes header={"Suspense"} movies={suspenseMovies} />
      </div>
      <div
        className={`${
          signSuspense ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {suspenseMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  thriller*/}
      <div className="browse-movies">
        <MoviesTypes header={"Thriller"} movies={thrillerMovies} />
      </div>
      <div
        className={`${
          signThriller ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {thrillerMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  comedy*/}
      <div className="browse-movies">
        <MoviesTypes header={"Comedy"} movies={comedyMovies} />
      </div>
      <div
        className={`${signComedy ? "single-movie show-movie" : "single-movie"}`}
      >
        {comedyMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  crime*/}
      <div className="browse-movies">
        <MoviesTypes header={"Crime"} movies={crimeMovies} />
      </div>
      <div
        className={`${signCrime ? "single-movie show-movie" : "single-movie"}`}
      >
        {crimeMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  documentry*/}
      <div className="browse-movies">
        <MoviesTypes header={"Documentaries"} movies={documentariesMovies} />
      </div>
      <div
        className={`${
          signDocumentaries ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {documentariesMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for  feel-good*/}
      <div className="browse-movies">
        <MoviesTypes header={"Feel-Good"} movies={feelGoodMovies} />
      </div>
      <div
        className={`${
          signFeelGood ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {feelGoodMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      {/* for cartoon */}
      <div className="browse-movies">
        <MoviesTypes header={"Cartoon"} movies={cartoonMovies} />
      </div>
      <div
        className={`${
          signCartoon ? "single-movie show-movie" : "single-movie"
        }`}
      >
        {cartoonMovies.map((item) => {
          if (item.id === movieId) {
            return <SingleMovie item={item} key={item.id} />;
          }
          return [];
        })}
      </div>
      <Footer />
    </>
  );
};

export default Browse;
