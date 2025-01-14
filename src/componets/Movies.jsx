// import { Movie } from './Movie'

// function Movies(props) {
//     const { movies = [] } = props;

//     return (
//         <div className="movies">
//             {movies.length ? (
//                 movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
//             ) : (
//                 <h4 className='ccc'>Мы не смогли найти фильм по вашему описанию. Проверьте написание фильма</h4>
//             )}
//         </div>
//     );
// }

// export{ Movies };

import { Movie } from './Movie'

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div>
                    {/* <img className="img_404" src={require('./404.png')} alt="Error 404" /> */}
                    <p className='ccc'>К сожалению такой фильм найден не был</p>
                </div>
            )}
        </div>
    );
}

export { Movies };