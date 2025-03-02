import '../assets/read-me.png'
import { Link } from 'react-router-dom'

export default function Nav() {

    //logic
    
     return (
         <div>
            <img src="../assets/read-me.png" alt="read-me-logo" />
            <br/>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/search">Search</Link>
         </div>
         
     )
 
 }