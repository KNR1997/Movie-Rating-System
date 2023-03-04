const getPosteURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const SearchBook = (props) => {

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        <img src={getPosteURL(props.movie.poster_path)}
                            width='143'
                            height='216'
                            alt='Book'
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        {/* <h5 className='card-title'>
                            {props.movie.author}
                        </h5> */}
                        <h4>
                            {props.movie.name}
                        </h4>
                        <p className='card-text'>
                            {props.movie.overview}
                        </p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <a className='btn btn-md main-color text-white' href='#'>
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchBook;