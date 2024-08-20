export default function Navbar({ query, setQuery, movies }) {
  return (
    <nav className="bg-p-blue-700 absolute top-0 left-0 h-20 w-full flex items-center justify-around">
      <div>
        <h1 className="text-white font-bold text-3xl">🍿CinemaApp</h1>
      </div>
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery("");
        }}
      >
        <input
          className="bg-p-blue-800 focus:border focus:border-p-blue-950 focus:outline-none text-gray-700 py-2 px-10 lg:px-20 rounded-full"
          placeholder="search movie....."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <lord-icon
          src="https://cdn.lordicon.com/pagmnkiz.json"
          trigger="hover"
          stroke="bold"
          state="hover-rotation"
          style={{
            Width: "50px",
            Height: "50px",
          }}
        ></lord-icon>
      </form>

      <div>
        <h3>Found {movies ? movies.length : 0} results</h3>
      </div>
    </nav>
  );
}
