

export default function search() {

    const handleFetch = async () => {
        if (!inputValue) return; // Prevent sending empty requests
    
        const response = await fetch(`https://api.example.com/data?query=${encodeURIComponent(inputValue)}`);
        const result = await response.json();
        setData(result);
      };
    
    
     return (
         <form>
             <input 
                type=''
                value=''
                onChange='{(e) => S'
                placeholdertext='what are you looking for?' />
             <button>
                Search
             </button>
         </form>
     )
 
 }