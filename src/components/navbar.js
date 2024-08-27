import { useState } from "react";
export default function Navbar({ query, setQuery, movies }) {
  return (
    <>
      <span className="hidden md:block">
        <LargeNav query={query} setQuery={setQuery} movies={movies} />
      </span>

      <span className="block md:hidden">
        <SmallNav query={query} setQuery={setQuery} />
      </span>
    </>
  );
}

// Large Navbar
function LargeNav({ query, setQuery, movies }) {
  return (
    <nav className="bg-p-blue-700 h-20 w-full flex items-center justify-around">
      <h1 className="text-white font-bold text-3xl">🍿CinemaApp</h1>

      <form
        className=" relative hidden md:block"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery("");
        }}
      >
        <input
          className=" bg-p-blue-800 focus:border focus:border-p-blue-950 focus:outline-none text-gray-700 py-2 px-10 lg:px-20 rounded-full"
          placeholder="search movie....."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <lord-icon
          src="https://cdn.lordicon.com/pagmnkiz.json"
          trigger="in"
          stroke="bold"
          state="hover-rotation"
          colors="primary:#ffffff"
          style={{
            Width: "50px",
            Height: "50px",
          }}
        ></lord-icon>
      </form>

      <div className="text-gray-300 hidden lg:block">
        <h3>Found {movies ? movies.length : 0} results</h3>
      </div>
    </nav>
  );
}
// Small Navbar
function SmallNav({ query, setQuery }) {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <nav className="bg-p-blue-700 h-auto w-full p-2">
      <div className="w-full flex items-center justify-around">
        <h1 className="text-white font-bold text-3xl">🍿CinemaApp</h1>
        <span
          id="menu-button"
          onClick={() => {
            setShowSearchBox(!showSearchBox);
          }}
          className="cursor-pointer bg-p-blue-800 active:scale-90 rounded-full h-10 w-10 grid place-items-center"
        >
          {!showSearchBox ? (
            <span class="material-symbols-outlined">menu</span>
          ) : (
            <span class="material-symbols-outlined">close</span>
          )}
        </span>
      </div>

      {showSearchBox && (
        <form
          id="form"
          className="relative w-full px-8 mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery("");
          }}
        >
          <input
            className="bg-p-blue-800 w-full focus:border focus:border-p-blue-950 focus:outline-none text-gray-700 py-2 px-10 lg:px-20 rounded-full"
            placeholder="search movie....."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <span className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer  active:scale-90 h-10 w-10 grid place-items-center">
            <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              colors="primary:#ffffff"
              trigger="loop"
              delay="2000"
              style={{
                Width: "40px",
                Height: "40px",
              }}
            ></lord-icon>
          </span>
        </form>
      )}
    </nav>
  );
}
