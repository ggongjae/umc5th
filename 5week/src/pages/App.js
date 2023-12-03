import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "../Components/Movies/Movies";
import Home from "../Components/Home/Home";
import MovieDetail from "../Components/Movies/MovieDetail";
function App() {
  return (
    <div className="root-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/movie" element={<Movies/>}/>
            <Route path="/movie/:title" element={<MovieDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
