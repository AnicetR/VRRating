import React, { useContext } from "react";

import { Button } from "react-bulma-components";
import Context from "../context";

export default () => {
  const gamesListContext = useContext(Context);
  const { handleLoadMore } = gamesListContext;

  return <Button onClick={handleLoadMore}>Load more...</Button>;
};
