import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export const Carousel = () => {
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=289c0466c2ac7d4a05f40b2fd3e73998&language=en-US&page=1').then(response => {
            console.log(response.data.results);
            setmovies(response.data.results);
        }).catch(err => console.log(err))
    }, []);

    return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {movies.slice(0, 3).map(movie => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {movies.slice(3, 6).map(movie => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {movies.slice(6, 9).map(movie => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            {/* <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <MovieCard movie={movies[7]} key={movies[7].id} />
                </div>
            </div> */}
            {/* <div className='homepage-carousel-title mt-3'>
                <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
            </div> */}
        </div>
    );

}

export default Carousel;