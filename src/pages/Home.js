import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Accordian from "../components/accordian";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Accordian />
      <Footer />
    </div>
  );
};

export default Home;
