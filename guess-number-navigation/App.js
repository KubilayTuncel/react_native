
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, {useState} from'react';
import GameScreen from './screens/GameScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import gameInitials from './contants/game-initials';
import Toast from 'react-native-toast-message';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StoreContext from './store';
import colors from './contants/color';


const Stack = createNativeStackNavigator();


export default function App() {

  const [randomNumber, setRandomNumber] = useState()
  const [timer, setTimer] = useState(gameInitials.totalTimes)
  const [shot, setShot] = useState(gameInitials.totalShots)
  const [gameResult, setGameResult] = useState("") //win | lost
  const [totalPoint, setTotalPoint] = useState(0)

  const contextProps = {
  randomNumber,timer,shot,gameResult,totalPoint,
  setRandomNumber,setTimer,setShot,setGameResult,setTotalPoint
  }

  return (
    <StoreContext.Provider value ={contextProps}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerStyle:styles.header,
          headerTintColor:colors.color2,
          headerTitleStyle:"center"
        }}>
          <Stack.Screen name="Game" component={GameScreen} options={{title: "Guess the Number"}}/>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: "Welcome the Game"}}/>
          <Stack.Screen name="Summary" component={SummaryScreen} options={{title: "Game Over"}}/>
        </Stack.Navigator>
      </NavigationContainer>
        <Toast visibilityTime={2000}/>
        <StatusBar style="auto" />
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  header:{
    backgroundColor:colors.color1,
    padding:20,
    alignItems:'center'
  }
});
