import Footer from "./layouts/HomePage/NavbarAndFooter/Footer";
import Navbar from "./layouts/HomePage/NavbarAndFooter/Navbar";
import "./App.css";
import HomePage from "./layouts/HomePage/HomePage";
import SearchBooksPage from "./layouts/SearchBook/components/SearchBookPage";

function App() {

  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>

  );

}

export default App;
