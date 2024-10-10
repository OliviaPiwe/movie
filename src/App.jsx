import { Routes, Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { SearchMovie } from "./SearchMovie.jsx";
import { SiteNotFound } from "./SiteNotFound.jsx";
import { Nav } from "./Nav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchMovie />}></Route>
        <Route path="/*" element={<SiteNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
