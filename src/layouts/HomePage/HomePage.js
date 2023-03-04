import Carousel from "./components/Carousel";
import ExploreTopMovies from "./components/ExploreTopMovies";
import Heros from "./components/Heros";
import MovieServices from "./components/MovieServices";

const HomePage = () => {

    return (
        <>
            <ExploreTopMovies />
            <Carousel />
            <Heros />
            <MovieServices />
        </>
    )

}

export default HomePage;