import React, { useContext, useEffect, useState } from "react";
import data from "./seed";
import Fuse from "fuse.js";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [movieId, setMovieId] = useState(0);
  const [allMovies, setAllMovies] = useState([]);
  const [childMovies, setChildMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [suspenseMovies, setSuspenseMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [documentariesMovies, setdocumentariesMovies] = useState([]);
  const [feelGoodMovies, setFeelGoodMovies] = useState([]);
  const [cartoonMovies, setCartoonMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [signChild, setSignChild] = useState(false);
  const [signDrama, setSignDrama] = useState(false);
  const [signRomance, setSignRomance] = useState(false);
  const [signSuspense, setSignSuspense] = useState(false);
  const [signThriller, setSignThriller] = useState(false);
  const [signComedy, setSignComedy] = useState(false);
  const [signCrime, setSignCrime] = useState(false);
  const [signDocumentaries, setSignDocumentaries] = useState(false);
  const [signFeelGood, setSignFeelGood] = useState(false);
  const [signCartoon, setSignCartoon] = useState(false);
  const [signFilter, setSignFilter] = useState(false);
  const [signFilterClick, setSignFilterClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handelSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const options = {
      keys: ["slug"],
    };
    const fuse = new Fuse(allMovies, options);
    const [...result] = fuse.search(value);
    let arr = [];
    result.map((res) => arr.push(res.item));
    if (value) {
      setSignFilter(true);
      setFilterMovies(arr);
    } else {
      setSignFilter(false);
      setFilterMovies([]);
    }
  };

  const handelFilterClick = (movie) => {
    setSignFilterClick(!signFilterClick);
    const { id } = movie;
    setMovieId(id);
    setSignChild(false);
    setSignDrama(false);
    setSignRomance(false);
    setSignSuspense(false);
    setSignThriller(false);
    setSignComedy(false);
    setSignCrime(false);
    setSignDocumentaries(false);
    setSignFeelGood(false);
    setSignCartoon(false);
  };

  const handelClick = (movie) => {
    const { id, genre } = movie;
    setShow(!show);
    setMovieId(id);
    setSignFilterClick(false);
    if (genre === "children") {
      setSignChild(!signChild);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "drama") {
      setSignChild(false);
      setSignDrama(!signDrama);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "romance") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(!signRomance);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "suspense") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(!signSuspense);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "thriller") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(!signThriller);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "comedies") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(!signComedy);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "crime") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(!signCrime);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "documentaries") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(!signDocumentaries);
      setSignFeelGood(false);
      setSignCartoon(false);
    } else if (genre === "feel-good") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(!signFeelGood);
      setSignCartoon(false);
    } else if (genre === "cartoon") {
      setSignChild(false);
      setSignDrama(false);
      setSignRomance(false);
      setSignSuspense(false);
      setSignThriller(false);
      setSignComedy(false);
      setSignCrime(false);
      setSignDocumentaries(false);
      setSignFeelGood(false);
      setSignCartoon(!signCartoon);
    }
  };

  // all movies
  const allMoviesList = () => {
    setAllMovies(data);
  };

  //  children content
  const childrenContent = () => {
    let movies = data.filter((item) => item.genre === "children");
    setChildMovies(movies);
  };
  // drama content
  const dramaContent = () => {
    let movies = data.filter((item) => item.genre === "drama");
    setDramaMovies(movies);
  };
  // romance content
  const romanceContent = () => {
    let movies = data.filter((item) => item.genre === "romance");
    setRomanceMovies(movies);
  };

  // suspense content
  const suspenseContent = () => {
    let movies = data.filter((item) => item.genre === "suspense");
    setSuspenseMovies(movies);
  };
  // thiller content
  const thrillerContent = () => {
    let movies = data.filter((item) => item.genre === "thriller");
    setThrillerMovies(movies);
  };

  // comedy content
  const comedyContent = () => {
    let movies = data.filter((item) => item.genre === "comedies");
    setComedyMovies(movies);
  };
  // crime content
  const crimeContent = () => {
    let movies = data.filter((item) => item.genre === "crime");
    setCrimeMovies(movies);
  };
  // documentaries content
  const documentariesContent = () => {
    let movies = data.filter((item) => item.genre === "documentaries");
    setdocumentariesMovies(movies);
  };
  // feelGood content
  const feelGoodContent = () => {
    let movies = data.filter((item) => item.genre === "feel-good");
    setFeelGoodMovies(movies);
  };
  //  cartoon content
  const cartoonContent = () => {
    let movies = data.filter((item) => item.genre === "cartoon");
    setCartoonMovies(movies);
  };
  useEffect(() => {
    allMoviesList();
    childrenContent();
    dramaContent();
    romanceContent();
    suspenseContent();
    thrillerContent();
    comedyContent();
    crimeContent();
    documentariesContent();
    feelGoodContent();
    cartoonContent();
  }, []);
  return (
    <AppContext.Provider
      value={{
        allMovies,
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
        handelClick,
        show,
        movieId,
        searchTerm,
        handelSearch,
        handelFilterClick,
        signFilterClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
