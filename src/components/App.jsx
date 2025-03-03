import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Book from "./Book.jsx";
import Favorites from "./Favorites.jsx";
import Results from "./Results.jsx";
import Nav from "./Nav.jsx";
import Search from "./Search.jsx"
import logo from "../assets/readme1.png"

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://api.example.com/data");
  //     const data = await response.json();
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted! 🚀");
  }, []);

  return (
    <div className="min-h-screen w-full bg-black pb-16 text-brown">

      <div>
        <div>
          <img
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            src={logo} />
        </div>
        <Search className="div" />
        <Results />
        <Book />
        <Favorites />
        <Nav className="fixed bottom-0 left-0 w-full h-16 bg-black border-t border-gray-800 shadow-lg" />
      </div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/favorites" element={<div>Favorites</div>} />
      </Routes>
    </div>
  );
}

export default App;
