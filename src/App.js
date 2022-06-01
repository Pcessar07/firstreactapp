import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";
import {useState, useEffect} from 'react'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect (()=> {console.log (searchText, "is the search text")
  
  if(searchText){ 
  fetch (`https://api.themoviedb.org/3/search/movie?api_key=b856c41dbb3ca9d39c3e90c8afa49817&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response=>response.json())
    .then (data=>{console.log(data)
    setSearchResults(data.results)})
  }
}, [searchText])
  

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
