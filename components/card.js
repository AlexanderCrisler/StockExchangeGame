import React from 'react';
import {Text, View} from 'react-native';

export default class Card {
  constructor(key, value, company, description) {
    this.key = key;
    this.value = value;
    this.company = company;
    this.description = description;
  }
}

export const CardVisualizer = props => {
  let cards = props.cards;
  let result = [];

  if (!Array.isArray(cards)) {
    return (
      <>
        <Text>^{cards.value}</Text>
        <Text>{cards.company}</Text>
        <Text>{cards.description}</Text>
      </>
    );
  }

  for (let i = 0; i < cards.length; i++) {
    result.push(
      <View key={cards[i].key.toString()}>
        <Text>^{cards[i].value}</Text>
        <Text>{cards[i].company}</Text>
        <Text>{cards[i].description}</Text>
      </View>
    );
  }

  return (
    <>
      {result}
    </>
  );
}
