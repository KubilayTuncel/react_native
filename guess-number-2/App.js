
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, {useState} from'react';
import GameScreen from './screens/GameScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import gameInitials from './contants/game-initials';


export default function App() {

  const [gameStatus, setGameStatus] = useState("welcome"); //welcome | start | end
  const [randomNumber, setRandomNumber] = useState()
  const [timer, setTimer] = useState(gameInitials.totalTimes)
  const [shot, setShot] = useState(gameInitials.totalShots)
  const [gameResult, setGameResult] = useState("") //win | lost

  return (
    <View style={styles.container}>
      {gameStatus === "welcome"? (<WelcomeScreen setGameStatus={setGameStatus}/> ): gameStatus === "start"? (<GameScreen /> ):  (<SummaryScreen />) }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
});
