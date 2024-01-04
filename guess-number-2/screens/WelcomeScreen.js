import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/common/header'
import gameInitials from '../contants/game-initials'
import IconButton from '../component/common/icon-button'
import Spacer from '../component/common/spacer'

const WelcomeScreen = ({setGameStatus}) => {
  return (
    <View style={styles.container}>
      <Header title="Welcome"/>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Game</Text>
        <Spacer/>
        <Text style={styles.desc}>Guess a number between {gameInitials.randomNumberDownLimit} and {gameInitials.randomNumberUpLimit} 
        in {gameInitials.totalTimes} seconds. You have {gameInitials.totalShots} shots.</Text>
        <IconButton title="Start The Game" icon="gamepad-variant-outline" onPress={()=>setGameStatus('start')}/>
      </View>
      
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding:20
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    desc:{
        fontSize: 20,
        textAlign: 'center',
        fontFamily:"italic",
    }
})