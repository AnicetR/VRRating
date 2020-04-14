import React from "react";

import 'react-bulma-components/dist/react-bulma-components.min.css';

import {Card, Media, Image, Content, Heading} from 'react-bulma-components';

export default (props) => {
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src={props.background_image}
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{props.name}</Heading>
            <Heading subtitle size={6}>
              Rating : {props.rating}/5
            </Heading>
          </Media.Item>
        </Media>
        <Content>
            Genre(s) : {props.genres.map((genre) => genre.name).join(', ')}
            <br/>
            Platform(s) : {props.platforms.map((item) => item.platform.name).join(', ')}
        </Content>
      </Card.Content>
    </Card>
  );
};
