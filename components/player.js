import React from 'react';
import { Text, View } from 'react-native';

import Card, { CardVisualizer } from './card.js'

export default class Player {
  constructor(standing, cards) {
    // Add name and color in future
    this.standing = standing;
    this.cards = cards;
    let money = 100000;
  }

  setMoney = newMoney => {
    money = newMoney;
  }
}

export const PlayerVisualizer = props => {
  let player = props.player;
  return (
    <View>
      <Text>Player: {player.standing}</Text>
      <Text>Money: {player.money}</Text>
      <CardVisualizer cards={player.cards} />
    </ View>
  );
}
