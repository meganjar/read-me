import { create } from 'zustand';


const API_KEY = import.meta.env.REACT_AP_API_KEY;
const baseURL =  'https://www.googleapis.com/books/v1/volumes?'
console.log(API_KEY)
const useStore = create((set) => ({
    query: "", 
    searchResults: [],
    fetchResults: async(query)=>{
        try {
                const encodedQuery = encodeURIComponent(query)
                const response = await fetch(`${baseURL}&key=${API_KEY}&q=${encodedQuery}`);
                const data = await response.json();
                return data.items;
             } catch (error) {
                console.error("Error fetching results:", error);
                return []; 
          }
    }
}))

export default useStore;

