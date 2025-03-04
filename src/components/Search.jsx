
import useStore from "./Store";
import Book from "./Book";
import React from 'react'

export default function Search() {

    const { query, setQuery, searchResults, fetchResults } = useStore(); 
    
    
 function handleSubmit(e) {
     e.preventDefault();
     const {value} = e.target.search
     setQuery(value);
     fetchResults()
 }
    
    
     return (
        <div>
         <form onSubmit={handleSubmit}>
             <input 
                type='text'
                name='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='search books' />
             <button 
               
                type='submit'>
                Search
             </button>
         </form>
         <div>
  {searchResults.length > 0 ? (
    searchResults.map((book) => <Book key={book.id} book={book} />)
  ) : (
    <p>undefined is not a function… nor is it a book title.</p>
  )}
</div>
        </div>


     )
 
 }
