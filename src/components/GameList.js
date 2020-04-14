import React, { useContext, useEffect } from "react";
import GameCard from "./GameCard";
import Context from "../context";

export default () => {
  let output = [];

  const gamesListContext = useContext(Context);
  const { gamesList, handleLoadMore } = gamesListContext;

  useEffect(() => handleLoadMore(), []);

  for (let game of gamesList) {
    output.push(<GameCard key={game.slug+Date.now()} {...game} />);
  }

  return output;
};
