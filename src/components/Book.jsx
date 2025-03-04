import React from 'react'
import { useStore } from "./Store";

export default function Books({book}) {
    const { toggleFavorites } = useStore(); 
    const { title, authors, imageLinks } = book.volumeInfo;
    console.log(imageLinks?.thumbnail)
    const favorite = "<3"
     return (
         <div className="book-card">
             <img 
                             src={imageLinks?.thumbnail} 
                             alt={title} 
                             className="book-thumbnail"
                             />
             <h1>{title}</h1>
             <p>{authors}</p>
             <button >preview</button>
             <button onClick={() => toggleFavorites(book)} >{favorite}</button>
         </div>
     )
 
 }