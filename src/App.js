import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import SearchComponent from "./components/SearchComponent";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Trending from "./Pages/Trending";
import Category from "./Pages/Category";
import Anime from "./Pages/Anime";

import { CategoryContextProvider } from "./Context/CategoryContext";

// import routes from './config/routes';

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <CategoryContextProvider>
        <Nav />
        <SearchComponent searchAnime={searchAnime} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search searchContent={searchContent} />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>

          <Route path="/anime">
            <Anime />
          </Route>
        </Switch>
      </CategoryContextProvider>
    </div>
  );
}

export default App;
