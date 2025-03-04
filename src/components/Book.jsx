export default function Books({book}) {

    const { title, authors, imageLinks } = book.volumeInfo;
    console.log(title, authors, imageLinks)
    const favorite = "<3"
     return (
         <div className="book">
             <img 
                             src={imageLinks.thumbnail || "https://via.placeholder.com/150"} 
                             alt={title} 
                             className="book-thumbnail"
                             />
             <h1></h1>
             <p></p>
             <button>preview</button>
             <button>{favorite}</button>
         </div>
     )
 
 }