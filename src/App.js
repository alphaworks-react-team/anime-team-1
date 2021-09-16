<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="App"></div>;
=======
import './App.css';
import axios from 'axios';
import SearchComponent from './components/SearchComponent';
import Home from './Pages/Home';

function App() {
  const searchAnime = (searchTerm) => {
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`, {
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {console.log(err)})
  }

  return (
    <div className="App">
      <SearchComponent searchAnime={searchAnime}/>
      <Home/>
    </div>
  );
>>>>>>> main
}

export default App;
