import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import Player, { PlayerVisualizer } from './components/player.js'
import Card from './components/card.js'
import Gums from './components/gums.js'

class Deck {
  constructor() {
    console.log("New Deck!");
    this.cards = [];
    let companyNames = ["Coke", "PnG", "Ford", "AmEx", "Salesforce", "Biogen"];
    let companies = [
      [-5, -5, 10, -10, 5, 10, 5, -10],
      [-5, 5, -10, -10, 10, 10, 15, 15, 5, -15, -15, -5],
      [-5, 15, 5, 15, 10, 5, -5, -15, -15, 10, -10, -10],
      [-20, 15, 10, 15, -5, -20, 20, 5, 5, -5, -15, -10, -10, -15, 20, 10],
      [10, -15, 5, -25, 10, 25, 20, 5, -20, -15, -25, 15, 25, -10, 15, -10, -5, 20, -5, -20],
      [-30, -15, -30, 10, -25, -10, -15, -20, 30, 15, 10, 20, 25, 5, 5, -20, 20, -10, -25, -5, 15, -5, 25, 30]
    ];

    let key = 0;
    for (let i = 0; i < companyNames.length; i++) {
      for (let j = 0; j < companies[i].length; j++) {
        this.cards.push(new Card(key, companies[i][j], companyNames[i], ""));
        key++;
      }
    }

    this.activeCards = this.shuffle(this.cards); // Need to shuffle before this
  }

  shuffle = cards => {
    let currentIndex = cards.length, randomIndex;

    //While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]
      ];
    }

    return cards;
  }

  draw = numOfCards => {
    let drawn = [];

    for (let i = 0; i < numOfCards; i++) {
      drawn.push(this.activeCards.pop());
    }

    return drawn;
  }

  getActiveCards = () => {
    return this.activeCards;
  }
}

const Time = () => {
  maxDays = 7;
  const [day, setDay] = useState(1);
  const [time, setTime] = useState("Morning");

  nextDay = () => {
    // Check end game
    if (time === "Afternoon" && day == maxDays) {
      endGame();
      return;
    }

    setTime("Morning");
    setDay(day + 1);

  }

  return (
      <View backgroundColor='yellow'>
        <Text>Day: {day}</Text>
        <Text>Time: {time}</Text>
      </View>
  );
}

const Table = (props) => {
  let playerList = props.playerList;
  let activePlayer = props.activePlayer;

  getPlayers = () => { return playerList; }

  // redeal cards
  // reorder players by one to right

  console.log("Player List: ", playerList);

  return (
    <View backgroundColor='red'>
      <PlayerVisualizer player={playerList[activePlayer]} />
    </ View>
  );
}

const createPlayers = (numOfPlayers, deck) => {
  let playerList = [];

  for (let i = 0; i < numOfPlayers; i++) {
    playerList.push(new Player(i, deck.draw(10)));
  }

  return playerList;
}

const GameController = () => {
  // TODO: Reorganize game controller under a parent object for holding non changing variables.
  // Order matters and rerendering this object rerenders all player draws and random cards. Cards
  // are currently in the App component to prevent their rerender. Moving them down into a lower order
  // component and moving player draws into the higher order object will prevent rerendering the data.
  console.log("New Game Controller");
  let numOfPlayers = 2;
  let deck = new Deck();

  const [endGameAlert, setEndGameAlert] = useState(false);
  const [playerList, setPlayerList] = useState(createPlayers(numOfPlayers, deck));
  const [activePlayer, setActivePlayer] = useState(0);

  console.log(playerList);


  nextPlayer = () => {

    if (activePlayer >= numOfPlayers - 1) {
      // TODO: handle different order of players each round
      setActivePlayer(0);
      //(time.getTime() === "Morning") ? time.setTime("Afternoon") : time.nextDay();
      return;
    }

    setActivePlayer(activePlayer + 1);
  }

  endGame = () => {
    setEndGameAlert(true);
    // declare winner
    // reset game or go to homepage
  }

  return (
    <View>
      <Table playerList={playerList} activePlayer={activePlayer} />
      <Button onPress={() => {nextPlayer()}} title="Next Player" />
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={endGameAlert}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            game.setEndGameAlert(!endGameAlert);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Game Over!</Text>
              <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => setEndGameAlert(!endGameAlert)}
                title="Close"
              />
            </View>
          </View>
        </Modal>
      </View>
    </ View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <GameController />
      <StatusBar style="auto" />
      <Gums />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default App;
