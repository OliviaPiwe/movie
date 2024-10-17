const newKey = import.meta.env.VITE_NEW_KEY;
export async function fetchMovie(movieName) {
  const link = `https://www.omdbapi.com/?apikey=${newKey}&s=${encodeURIComponent(
    movieName
  )}`;

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    if (json.Search) {
      const movies = json.Search.map((movie) => ({
        title: movie.Title,
        poster: movie.Poster,
      }));

      return movies;
    } else {
      console.log("No movies found.");
      return [];
    }
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}
