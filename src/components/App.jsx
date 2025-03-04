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
  
  return (
    <div className="min-h-screen w-full bg-black pb-16 text-brown">

      <div>
        <div>
          <img
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            src={logo} />
        </div>

        <Nav className="fixed bottom-0 left-0 w-full h-16 bg-black border-t border-gray-800 shadow-lg" />
      </div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
