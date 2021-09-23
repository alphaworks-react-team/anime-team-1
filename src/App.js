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

import { CategoryContextProvider } from "./Context/CategoryContext";
import AnimeDetails from "./Pages/AnimeDetails";
import { WatchlistProvider } from "./Context/WatchlistContext";

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
        // console.log(setSearchContent)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <WatchlistProvider>
      <CategoryContextProvider>
        <Nav />
        <Switch>
          <Route exact path="/">
            <SearchComponent searchAnime={searchAnime} />
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchComponent searchAnime={searchAnime} />
            <Search searchContent={searchContent} />
          </Route>
          <Route path="/trending">
            <SearchComponent searchAnime={searchAnime} />
            <Trending />
          </Route>
          <Route exact path="/categories">
            <SearchComponent searchAnime={searchAnime} />
            <Category />
          </Route>
          <Route exact path="/anime/:id">
            <AnimeDetails />
          </Route>
        </Switch>
      </CategoryContextProvider>
      </WatchlistProvider>
    </div>
  );
}

export default App;
