export default function Movie({ movie, setSelectedMovieID }) {
  return (
    <div
      className="movie w-full h-22 rounded-lg bg-p-blue-800 hover:bg-p-blue-900 flex items-center justify-between p-2 cursor-pointer"
      onClick={() =>
        setSelectedMovieID((ID) => (movie.imdbID === ID ? null : movie.imdbID))
      }
    >
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
          🗓️{movie.Year}{" "}
          {movie.Runtime ? (
            <span className="ml-4"> 🕛{movie.Runtime} </span>
          ) : (
            ""
          )}
        </p>
        <p>
          {movie.imdbRating ? <span> ⭐{movie.imdbRating} </span> : ""}
          {movie.userRating ? (
            <span className="ml-4"> 🌟{movie.userRating} </span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}
