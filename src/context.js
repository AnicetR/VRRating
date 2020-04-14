import React, { useState, useEffect } from "react";
import Axios from "axios";

const Context = React.createContext({});

export const GameListProvider = (props) => {

  const tagsEndpoint = "https://api.rawg.io/api/games";
  const basePlatforms = [4, 18]; //PC, playstation
  const ordering = "-rating";
  const tags = 33; //VR

  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(1);
  const [platforms, setPlatforms] = useState(basePlatforms);

  const loadsGamesList = () => {
   Axios({
      method: "get",
      url: tagsEndpoint,
      params: {
        page: page,
        platforms: platforms,
        tags: tags,
        ordering: ordering,
      },
    }).then((response) => {
        setGamesList(gamesList.concat(response.data.results));
        setPage(page+1);
    })
  };

  const handleLoadMore = () => loadsGamesList();

  return (
      <Context.Provider
        value={{
            gamesList,
            handleLoadMore
        }}>
            {props.children}
        </Context.Provider>
  )
};
export const GameListConsumer = Context.Consumer;

export default Context;
