import React, { useState } from "react";
import Axios from "axios";

const Context = React.createContext({});

export const GameListProvider = (props) => {
  const tagsEndpoint = "https://api.rawg.io/api/games";
  const basePlatforms = [4, 18]; //PC, playstation
  const basePlatformsDictionnary = new Map();
  basePlatformsDictionnary.set(4, 'Playstation 4');
  basePlatformsDictionnary.set(18, 'PC');

  const ordering = "-rating";
  const tags = 33; //VR

  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(1);
  const [platforms, setPlatforms] = useState(basePlatforms);

  const loadsGamesList = (cb) => {
    Axios({
      method: "get",
      url: tagsEndpoint,
      params: {
        page: page,
        platforms: platforms,
        tags: tags,
        ordering: ordering,
      },
    }).then(cb);
  };

  const loadMoreGames = () => {
    loadsGamesList((response) => {
      setGamesList(gamesList.concat(response.data.results));
      setPage(page + 1);
    })
  }

  const reloadGames = () => {
    loadsGamesList((response) => {
      setGamesList(response.data.results);
      setPage(2);
    })
  }

  const handleLoadMore = () => loadMoreGames();

  return (
    <Context.Provider
      value={{
        gamesList,
        handleLoadMore,
        platforms,
        setPlatforms,
        basePlatforms,
        reloadGames,
        basePlatformsDictionnary
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export const GameListConsumer = Context.Consumer;

export default Context;
