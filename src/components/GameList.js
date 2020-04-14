import React from 'react';
import GameCard from './GameCard'

export default (props) => {
    let output = [];

    for(let game of props.games){
        output.push((<GameCard key={game.slug} {...game}/>))
    }

    return output;
}