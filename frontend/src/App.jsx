import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // const movieNumber = 2;

  return (
    <>
    <div><NavBar/></div>
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Terminator", release_date: "2024" }} />
      ) : (
        <MovieCard
          movie={{ title: "Prince of Persia", release_date: "2023" }}
        />
      )} */}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
