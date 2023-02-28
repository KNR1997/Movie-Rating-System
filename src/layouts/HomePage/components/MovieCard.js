const getPosteURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = (props) => {

    console.log(props.movie.poster_path);

    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img src={getPosteURL(props.movie.poster_path)} />
            </div>
            <div>{props.movie.name}</div>
        </div>
    );
}

export default MovieCard;