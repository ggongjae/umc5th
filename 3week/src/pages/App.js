import './App.css';
import MovieList from '../Movies/MovieList';
import { dummy } from '../Movies/movieDummy';
function App() {
  return (
    <div className="App">
        <div className='app-container'>
            {
              dummy.results.map((item) => {
                return(
                  <MovieList
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}/>
                )
              })
            }
        </div>
    </div>
  );
}

export default App;
