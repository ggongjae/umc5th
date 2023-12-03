import MovieList from './MovieList.style';
import { dummy } from '../movieDummy';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

function Movies() {
  const navigate = useNavigate();

  const onClickImg = (title, poster_path) => {
    navigate(`/movie/${title}`, {
      state: { title, poster_path },
    });
  };

  return (
    <div>
        <Header/>
        <div className='app-container'>
            {
              dummy.results.map((item) => {
                return(
                  <MovieList
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    overview={item.overview}
                    onClick={() => onClickImg(item.title, item.poster_path)} // onClick prop 추가
                  />
                )
              })
            }
        </div>
    </div>
  );
}

export default Movies;

