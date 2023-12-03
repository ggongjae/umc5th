
import {dummy} from './movieDummy'


const getImageUrl = (path, size = 500) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
}

export default function MovieList({title,poster_path,vote_average,overview}) {
  return (
    <div className='movie-container'>
      <img className="image "src={getImageUrl(poster_path)}/>
      <div className='movie-overview'>
        <p className='overview-title'>{title}</p>
        <p className='overview'>{overview}</p>
      </div> 
      <div className='movie-info'>
        <h4>{title}</h4>
        <span>{vote_average}</span>

      </div>
  </div>
  );
};

