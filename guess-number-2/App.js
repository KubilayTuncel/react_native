
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, {useState} from'react';
import GameScreen from './screens/GameScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import gameInitials from './contants/game-initials';
import Toast from 'react-native-toast-message';


export default function App() {

  const [gameStatus, setGameStatus] = useState("welcome"); //welcome | start | end
  const [randomNumber, setRandomNumber] = useState()
  const [timer, setTimer] = useState(gameInitials.totalTimes)
  const [shot, setShot] = useState(gameInitials.totalShots)
  const [gameResult, setGameResult] = useState("") //win | lost
  const [totalPoint, setTotalPoint] = useState(0)

  return (
    <View style={styles.container}>
      {gameStatus === "welcome"? (<WelcomeScreen setGameStatus={setGameStatus}/> ): gameStatus === "game"? 
      (<GameScreen randomNumber={randomNumber} setRandomNumber={setRandomNumber} timer={timer} setTimer={setTimer} shot={shot} setShot={setShot}
      gameStatus={gameStatus} setGameStatus={setGameStatus} setGameResult={setGameResult} setTotalPoint={setTotalPoint}/> ):  
      (<SummaryScreen setGameStatus={setGameStatus} gameResult={gameResult} totalPoint={totalPoint} timer={timer} setTimer={setTimer} shot={shot} randomNumber={randomNumber}/>) }
      <Toast visibilityTime={2000}/>
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
