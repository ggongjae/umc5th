import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "../Components/Movies/Movies";
import Home from "../Components/Home/Home";
import MoviesDetail from "../Components/Movies/MoviesDetail";
import NotFound from "../Components/NotFound";
import Login from "../Components/Login";
function App() {
  return (
    <div className="root-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/movie" element={<Movies/>}/>
            <Route path="/movie/:title" element={<MoviesDetail/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
