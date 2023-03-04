import { useState, useEffect } from "react";
import SearchBook from "./SearchBook";
import axios from "axios";
import Pagination from "../../Pagination/Pagination";

const SearchTVShowsPage = () => {

    const [movies, setmovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(5);
    const [category, setCategory] = useState();

    useEffect(() => {
        setLoading(true);

        if (category === 'Latest') {
            axios.get('https://api.themoviedb.org/3/tv/latest?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
                setmovies(response.data.results);
            }).catch(err => console.log(err))

        } else if (category === 'Popular') {
            axios.get('https://api.themoviedb.org/3/tv/popular?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
                setmovies(response.data.results);
            }).catch(err => console.log(err))


        } else if (category === 'TopRated') {

            axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
                setmovies(response.data.results);
            }).catch(err => console.log(err))

        } else {

            axios.get('https://api.themoviedb.org/3/tv/popular?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
                setmovies(response.data.results);
            }).catch(err => console.log(err))
        }





        setLoading(false);
    }, [category]);

    //Get current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const categoryField = (value) => {
        if (
            value === 'Popular' ||
            value === 'Latest' ||
            value === 'TopRated'
        ) {
            setCategory(value);
        } else {
            setCategory('Popular');
        }
    }

    return (
        <div>
            <div className="container">
                <div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="d-flex">
                                <input className="form-control me-2" type='search' placeholder="Search" aria-labelledby="Search" />
                                <button className="btn btn-outline-success">Search</button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="d-flex">
                                <div className='dropdown me-2'>
                                    <button className='btn btn-secondary dropdown-toggle' type='button'
                                        id='dropdownMenuButton1' data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        {category}
                                    </button>
                                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                        <li>
                                            <a onClick={() => categoryField('Popular')} className='dropdown-item' href='#'>
                                                Popular
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a onClick={() => categoryField('Latest')} className='dropdown-item' href='#'>
                                                Latest
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a onClick={() => categoryField('OnAir')} className='dropdown-item' href='#'>
                                                On Air
                                            </a>
                                        </li> */}
                                        <li>
                                            <a onClick={() => categoryField('TopRated')} className='dropdown-item' href='#'>
                                                Top Rated
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type='button'
                                        id='dropdownMenuButton1' data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        TVShows
                                    </button>
                                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Popular
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Airing Today
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                On TV
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Top Rated
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5>Number of results: {movies.length}</h5>
                    </div>
                    <p>
                        {indexOfFirstMovie} to {indexOfLastMovie} of {movies.length} items:
                    </p>
                    {currentMovies.map(movie => (
                        <SearchBook movie={movie} key={movie.id} loading={loading} />
                    ))}
                    <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
                </div>
            </div>
        </div>
    );
}

export default SearchTVShowsPage;