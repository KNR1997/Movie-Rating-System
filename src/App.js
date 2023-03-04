import Footer from "./layouts/HomePage/NavbarAndFooter/Footer";
import Navbar from "./layouts/HomePage/NavbarAndFooter/Navbar";
import "./App.css";
import HomePage from "./layouts/HomePage/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchTVShowsPage from "./layouts/SearchBook/components/SearchTVShowsPage";

function App() {

  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>

  );

}

export default App;
