import React, { useEffect } from "react";

import "./App.css";

import GameList from "../../components/GameList";
import PlatformSelector from "../../components/PlatformSelector";

import { Button, Columns, Section, Container } from "react-bulma-components";
import { GameListProvider } from "../../context";

class App extends React.PureComponent {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <GameListProvider>
          <Section>
            <Container>
              <Columns>
                <Columns.Column size={9}>
                  <GameList />
                  <Button>Load more titles</Button>
                </Columns.Column>
                <Columns.Column size={3}>
                  {/* <PlatformSelector/> */}
                </Columns.Column>
              </Columns>
            </Container>
          </Section>
        </GameListProvider>
      </div>
    );
  }
}

export default App;
