import Footer from "./layouts/HomePage/NavbarAndFooter/Footer";
import Navbar from "./layouts/HomePage/NavbarAndFooter/Navbar";
import "./App.css";
import HomePage from "./layouts/HomePage/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchTVShowsPage from "./layouts/SearchBook/components/SearchTVShowsPage";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <HomePage />
          </Route>
          <Route path='/searchTVShows'>
            <SearchTVShowsPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>

  );

}

export default App;
