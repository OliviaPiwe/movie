import { fetchMovie } from "./fetchMovies";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function serializeFormQuery(form) {
  const formData = new FormData(form);
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.set(key, value);
  });

  return params;
}

export function SearchMovie() {
  const inputRef = useRef();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  async function handlerSearch(event) {
    event.preventDefault();

    // params
    const params = serializeFormQuery(event.target);
    setSearchParams(params);

    const movieTitle = inputRef.current.value;
    const fetchedMovies = await fetchMovie(movieTitle);

    setMovies(fetchedMovies);
  }

  useEffect(() => {
    const movieTitle = searchParams.get("query");
    if (movieTitle) {
      fetchMovies(movieTitle);
    }
  }, [searchParams]);

  async function fetchMovies(movieTitle) {
    const fetchedMovies = await fetchMovie(movieTitle);
    setMovies(fetchedMovies);
  }

  return (
    <main>
      <h1>Search Movies</h1>
      <form onSubmit={handlerSearch}>
        <input
          className="black"
          ref={inputRef}
          name="query"
          type="text"
          placeholder="Enter movie name"
        />
        <button type="submit" className="black">
          Search
        </button>
      </form>

      {movies.length > 0 ? (
        <div className="movieList">
          {movies.map((movie, index) => (
            <div className="movie" key={index}>
              <a href="#" target="_blank">
                <h3>{movie.title}</h3>
              </a>
              {movie.poster !== "N/A" && (
                <img src={movie.poster} alt={movie.title} width="100" />
              )}
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
