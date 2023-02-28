import ExploreTopMovies from "./layouts/HomePage/components/ExploreTopMovies";
import Footer from "./layouts/HomePage/NavbarAndFooter/Footer";
import Navbar from "./layouts/HomePage/NavbarAndFooter/Navbar";
import "./App.css";
import Heros from "./layouts/HomePage/components/Heros";
import MovieServices from "./layouts/HomePage/components/MovieServices";

function App() {

  return (
    <div>
      <Navbar />
      <ExploreTopMovies />
      <Heros/>
      <MovieServices/>
      <Footer/>
    </div>

  );

}

export default App;
