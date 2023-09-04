import React from 'react';
import { Text, View } from 'react-native';

import Card, { CardVisualizer } from './card.js'
import Teeth from './teeth.js'
import Gums from './gums.js'

// export default class Player {
//   constructor(standing, cards) {
//     // Add name and color in future
//     this.standing = standing;
//     this.cards = cards;
//     let money = 100000;
//   }
//
//   setMoney = newMoney => {
//     money = newMoney;
//   }
// }

// export const PlayerVisualizer = props => {
//   let player = props.player;
//   let isActive = props.isActive;
//   return (
//     <View>
//       <Text>Player: {player.standing}</Text>
//       <Text>Money: {player.money}</Text>
//       <CardVisualizer cards={player.cards} />
//     </ View>
//   );
// }

export default function Player(props) {
  number = props.number;
  name = props.name;
  color = props.color;
  return (
    <>
      <Teeth />
      <Gums number={number} name={name} color={color} />
    </>
  );
}
