import Movie from "./movie";
import Loader from "./loader";
export default function ResultBox({
  movies,
  setSelectedMovieID,
  loading,
  error,
}) {
  return (
    <div className="resultbox bg-p-blue-950 shadow-2xl rounded-lg overflow-y-auto flex flex-col gap-2 p-2">
      {loading && <Loader />}
      {!loading &&
        movies &&
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            movie={movie}
            setSelectedMovieID={setSelectedMovieID}
          />
        ))}
      {error && <h2 className="text-red-500 m-auto">{error}</h2>}
    </div>
  );
}
