import { useState,useEffect } from "react";
import SearchBook from "./SearchBook";
import axios from "axios";

const SearchBooksPage = () => {

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
            setmovies(response.data.results);

            console.log(response.data);
        }).catch(err => console.log(err))
    }, []);

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
                            <div className='dropdown'>
                                <button className='btn btn-secondary dropdown-toggle' type='button'
                                    id='dropdownMenuButton1' data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                        Category
                                </button>
                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Front End
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Back End
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Data
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            DevOps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5>Number of results: (22)</h5>
                    </div>
                    <p>
                        1 to 5 of 22 items:
                    </p>
                    {movies.map(movie => (
                        <SearchBook movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBooksPage;