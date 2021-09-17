import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router";
import Nav from "./components/Nav";
import SearchComponent from "./components/SearchComponent";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Trending from "./Pages/Trending";

import routes from './config/routes';

function App() {
  const [searchContent, setSearchContent] = useState([]);

  const searchAnime = (searchTerm) => {
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      })
      .then((res) => {
        setSearchContent(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Nav />
      <SearchComponent searchAnime={searchAnime} />
      <Search searchContent={searchContent} />
      <div>
        {routes}
      </div>
      
      {/* 
      <Home />
      <Trending/> */}
    </div>
  );
}

export default App;
