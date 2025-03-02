import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Book from "./Book.jsx";
import Favorites from "./Favorites.jsx";
import Results from "./Results.jsx";
import Nav from "./Nav.jsx";
import Search from "./Search.jsx"

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    }

    fetchData();
  }, []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted! 🚀");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/favorites" element={<div>Favorites</div>} />
      </Routes>
      <div>
        <Nav />
        <Search className="div" />
        <Results />
        <Book />
        <Favorites />
      </div>
    </>
  );
}

export default App;
