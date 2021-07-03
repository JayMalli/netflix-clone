import img1 from "../images/misc/tv.gif";
import img2 from "../images/misc/mobile.gif";
import img3 from "../images/misc/home-imac.jpg";
const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron-inner" style={{ flexDirection: "row" }}>
        <div className="info">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <img src={img1} alt="Tiger King on Netflix" />
      </div>
      <div className="jumbotron-inner" style={{ flexDirection: "row-reverse" }}>
        <div className="info">
          <h2>Download your programmes to watch on the go.</h2>
          <p>Save your data and watch all your favourites offline.</p>
        </div>
        <img src={img2} alt="watch on you mobile" />
      </div>
      <div className="jumbotron-inner" style={{ flexDirection: "row" }}>
        <div className="info">
          <h2>Watch everywhere</h2>
          <p>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </p>
        </div>
        <img src={img3} alt="Money hesit on netflix" />
      </div>
    </div>
  );
};

export default Jumbotron;
