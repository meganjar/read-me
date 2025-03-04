

import useStore from "./Store";
import Book from "./Book";
import React from 'react'

export default function Favorites() {

    const { favorites, toggleFavorites } = useStore(); 
    

    
    
     return (
        <div>
            <h1>Favorites</h1>
         <div>
  {favorites.length > 0 ? (
    favorites.map((book) => <Book key={book.id} book={book}  />)
  ) : (
    <p>you don't have any favorites</p>
  )}
</div>
        </div>


     )
 
 }
