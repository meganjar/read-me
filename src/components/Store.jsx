import { create } from 'zustand';


const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const baseURL = 'https://www.googleapis.com/books/v1/volumes'
const useStore = create((set, get) => ({
    query: "", 
    setQuery: (value) => {
        set({ query: value }); 
      },
    
    searchResults: [],
    fetchResults: async(query) => {
        try {
                const { query } = get();
                if (!query) return;
                const encodedQuery = encodeURIComponent(query)
                const response = await fetch(`${baseURL}?q=${encodedQuery}&maxResults=20`);
              
                const data = await response.json();
                console.log(data.items)
                set({ searchResults: data.items || []});
                console.log(get().searchResults)
                
             } catch (error) {
                console.error("Error fetching results:", error);
                set({ searchResults: [] });
          }
    }
}))

export default useStore;



