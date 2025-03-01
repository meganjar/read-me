import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import '../App.css'

function App() {

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    }
  
    fetchData();
  }, []);
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component mounted! 🚀");
  }, []);

  return (
    <>
      <Routes>
        < Route path='/' element={<div>Home Page</div>} />

        <Route path='/search' element={<div>Profile Page</div>}/>
		</Routes>
    <div>
      HIHI
    </div>
    </>
  )
}

export default App
