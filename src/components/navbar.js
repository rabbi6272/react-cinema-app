import { useState } from "react";
export default function Navbar({ query, setQuery, movies }) {
  const [showSearch, setShowSearch] = useState(false);

  function SmallNav({ query, setQuery }) {
    return (
      <nav className="bg-p-blue-700 h-auto w-full p-2">
        <div className="w-full flex items-center justify-around mb-2">
          <h1 className="text-white font-bold text-3xl">🍿CinemaApp</h1>
          <span
            onClick={() => setShowSearch(!showSearch)}
            className="cursor-pointer bg-p-blue-800 active:scale-90 rounded-full h-12 w-12 grid place-items-center"
          >
            <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              colors="primary:#ffffff"
              trigger="loop"
              delay="2000"
              style={{
                Width: "50px",
                Height: "50px",
              }}
            ></lord-icon>
          </span>
        </div>

        {showSearch && (
          <form
            id="form"
            className=" w-full px-8"
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
          </form>
        )}
      </nav>
    );
  }
  return (
    <>
      <span className="hidden md:block">
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
      </span>

      <span className="block md:hidden">
        <SmallNav query={query} setQuery={setQuery} />
      </span>
    </>
  );
}
