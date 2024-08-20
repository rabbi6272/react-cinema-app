import { useEffect, useState } from "react";
import StarRating from "./starRating";
import Loader from "./loader";

export default function ResultInfoBox({ selectedMovieID }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    async function searchMovies() {
      try {
        setMovieDetails(null);
        setLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?i=${selectedMovieID}&apikey=5cc173f0`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          throw new Error("❌ Movie not found");
        }
      } catch (error) {
        console.error(`Error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [selectedMovieID]);

  function addToWatched(movieDetails) {
    const watchedMovie = {
      ...movieDetails,
      userRating: userRating,
    };
    setWatchedMovies([...watchedMovies, watchedMovie]);
    setUserRating(0);
  }
  return (
    <div className="resultInfobox  bg-p-blue-950 shadow-2xl rounded-lg mt-20  flex flex-col gap-4 p-2">
      {loading && <Loader />}
      {!movieDetails ? (
        !loading && (
          <>
            <div className="h-auto w-full bg-p-blue-900 rounded flex flex-col gap-2 p-2 text-center">
              <h2>Movies you have watched:</h2>
              <p className="text-gray-300 ">
                {watchedMovies ? watchedMovies.length : 0}{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {watchedMovies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </>
        )
      ) : (
        <>
          <div className="h-auto w-full bg-p-blue-900 rounded-lg flex p-2 relative">
            <button
              className="absolute left-1 top-1 h-8 w-8
             rounded-full bg-p-blue-500 hover:bg-p-blue-600 shadow-lg text-2xl"
              onClick={() => setMovieDetails(null)}
            >
              ←
            </button>
            <div className="w-1/3 h-full rounded-lg">
              <img
                src={movieDetails.Poster}
                alt={movieDetails.Title}
                className="rounnded-lg"
              />
            </div>
            <div className="h-full flex-1 pl-2">
              <h1 className="text-white font-bold text-2xl">
                {movieDetails.Title}
              </h1>
              <p className="text-gray-300">{movieDetails.Genre}</p>
              <p className="text-gray-300">{movieDetails.Released}</p>
              <p className="text-gray-300">
                {" "}
                🕛{movieDetails.Runtime} ⭐{movieDetails.imdbRating}
              </p>
              <p className="text-gray-300">Director: {movieDetails.Director}</p>
              <p className="text-gray-300">Actors: {movieDetails.Actors}</p>
            </div>
          </div>

          <div className="p-2 bg-p-blue-900 rounded-lg">
            <p className="text-gray-300">{movieDetails.Plot}</p>
          </div>

          <div className="p-6 bg-p-blue-900 flex flex-col gap-4 items-center justify-center rounded-lg">
            {watchedMovies
              .map((movie) => movie.imdbID)
              .includes(selectedMovieID) ? (
              <p className="text-gray-300">Movie already added to Watchlist</p>
            ) : (
              <>
                <StarRating
                  maxRating={10}
                  size={25}
                  color="#FCD53F"
                  rating={userRating ? userRating : 0}
                  setRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    className="text-white bg-p-blue-600 hover:bg-p-blue-700 px-10 py-2 rounded-full"
                    onClick={() => {
                      addToWatched(movieDetails);
                      setMovieDetails(null);
                    }}
                  >
                    + Add to Watchlist
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="movie w-full h-22 rounded-lg bg-p-blue-800 hover:bg-p-blue-900 flex items-center justify-between p-2 cursor-pointer">
      <div className="movie-img h-20">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-full w-full rounded"
        />
      </div>
      <div className="movie-info text-gray-300 w-4/5 px-4 flex flex-col gap-1 items-start justify-start text-sm">
        <h1 className="text-white font-bold">{movie.Title}</h1>
        <p>
          🗓️{movie.Year} <span className="ml-4"> 🕛{movie.Runtime} </span>
        </p>
        <p>
          <span> ⭐{movie.imdbRating} </span>
          <span className="ml-4"> 🌟{movie.userRating} </span>
        </p>
      </div>
    </div>
  );
}
