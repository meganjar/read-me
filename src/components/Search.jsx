import useStore from "./Store";

export default function Search() {

    // const handleFetch = async () => {
    //     if (!inputValue) return; // Prevent sending empty requests
    
    //     const response = await fetch(`https://api.example.com/data?query=${encodeURIComponent(inputValue)}`);
    //     const result = await response.json();
    //     setData(result);
    //   };
    function Controls() {
        const increasePopulation = useStore((state) => state.increasePopulation)
        return <button onClick={increasePopulation}>one up</button>
      }
    
    
     return (
         <form>
             <input 
                // type=''
                // value=''
                // onChange='{(e) => S'
                placeholder='search books' />
             <button>
                Search
             </button>
         </form>
     )
 
 }