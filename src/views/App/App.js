import React, { useEffect } from 'react';

import './App.css';
import GameCard from '../../components/GameCard';
import Axios from 'axios';
import GameList from '../../components/GameList';
import {Button} from 'react-bulma-components';

class App extends React.PureComponent{
  tagsEndpoint = 'https://api.rawg.io/api/games';
  basePlatforms = [4,18]; //PC, playstation
  ordering = '-rating';
  tags = 33; //VR

  constructor(){
    super();

    this.state = {
      gamesList: [],
      platforms: [],
      page: 1
    }

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount(){
    
    this.loadGamesList();
  }

  loadMore(){
    this.loadGamesList();
  }

  loadGamesList(){
    Axios({
      method: 'get',
      url: this.tagsEndpoint,
      params: {
        platforms : this.basePlatforms.toString(),
        tags: this.tags,
        ordering: this.ordering,
        page: this.state.page
      }
    }).then((response) => {
      this.setState((prevState, props) => ({
        page: prevState.page + 1,
        gamesList : prevState.gamesList.concat(response.data.results)
      })
      );
    });
  }
  
  render() {
    return (
      <div>
        <div id="list">
          <GameList games={this.state.gamesList} />
          <Button onClick={this.loadMore}>Load more titles</Button>
        </div>
      </div>
    );
  }
  
}

export default App;
