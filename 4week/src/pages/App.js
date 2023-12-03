import './App.css';
import MovieList from '../Components/Movies/MovieList.style';
import { dummy } from '../Components/movieDummy';
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
