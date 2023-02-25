import ExploreTopBooks from "./layouts/HomePage/components/ExploreTopMovies";
import Footer from "./layouts/HomePage/NavbarAndFooter/Footer";
import Navbar from "./layouts/HomePage/NavbarAndFooter/Navbar";
import "./App.css";

function App() {

  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Footer/>
    </div>

  );

}

export default App;
