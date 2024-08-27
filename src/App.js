import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import ResultBox from "./components/resultbox";
import ResultInfoBox from "./components/resultinfobox";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchMovies() {
      if (query === "") {
        setMovies([]);
        setError(null);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        setMovies([]);
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=5cc173f0`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies([...data.Search]);
          setError(null);
        } else {
          setError("❌ Movie not found");
        }
      } catch (error) {
        console.error(`Error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [query]);

  return (
    <div className="App h-screen w-screen">
      <Navbar query={query} setQuery={setQuery} movies={movies} />
      <div className="Box flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 justify-center mt-2 overflow-y-auto">
        <ResultBox
          movies={movies}
          setSelectedMovieID={setSelectedMovieID}
          loading={loading}
          error={error}
        />
        <ResultInfoBox selectedMovieID={selectedMovieID} />
      </div>
    </div>
  );
}
