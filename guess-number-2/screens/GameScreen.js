import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Header from '../component/common/header'
import ScoreBoard from '../component/game-screen/scorboard'
import Spacer from '../component/common/spacer'
import Card from '../component/common/card'
import IconButton from '../component/common/icon-button'
import colors from '../contants/color'
import gameInitials from '../contants/game-initials'
import Toast from 'react-native-toast-message'

const GameScreen = (props) => {
  const {randomNumber, setRandomNumber, timer, setTimer, shot, setShot, gameStatus, setGameStatus, setGameResult, setTotalPoint} = props

  const [number, setNumber] = useState() //onChange kullanicinin yazdigi degeri direk olarak bir state atarak kontrol etme imkanimiz oluyor

  const inputRef = useRef(null)

  useEffect(() => {

    setShot(gameInitials.totalShots)

    setTotalPoint(0)

    setGameResult("")

    //random number keep
    const rn = Math.floor(Math.random() * (gameInitials.randomNumberUpLimit - gameInitials.randomNumberDownLimit) + gameInitials.randomNumberDownLimit)

    setRandomNumber(rn)

    //setTimeout belirli süreden sonra fonk calisiyordu, setInterval verilen sürede tekrar ederek fonk calistiriyor.
    //Timer reset
    setTimer(gameInitials.totalTimes)
   
    const interval = setInterval(() => {
     setTimer(prev=>prev-1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  },[])

  useEffect(() => {
    if(timer <= 0){
      endGame("lost")
    }
  },[timer])

  const endGame = (result) => { 
    setGameStatus("summary")
    setGameResult(result)
    setTotalPoint(timer * shot * 10)

  }

   const handleGuess = () => { 
    const enteredNumber = Number(number)
      if(isNaN(enteredNumber) || enteredNumber < gameInitials.randomNumberDownLimit || enteredNumber > gameInitials.randomNumberUpLimit){
        Toast.show({
          type: 'error',
          text1: `You have to type number between ${gameInitials.randomNumberDownLimit} and ${gameInitials.randomNumberUp}`
        })

        return;
      }
      if(randomNumber === enteredNumber){
        endGame("win");
      }else if(randomNumber > enteredNumber){
        Toast.show({
          type: 'info',
          text1: `It must be greater then ${enteredNumber}`
        })
        handleShoot()
      }else{
        Toast.show({
          type: 'info',
          text1: `It must be less then ${enteredNumber}`
        })
        handleShoot()
      } 
    setNumber("")
  }

  const handleShoot = () => {
    if(shot>0){
      setShot(prev=>prev-1)
    }else{
      endGame("lost");
    }
  }

  const setFocus = () => { 
    inputRef.current.focus()
   }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
        <Header title="Guess Number"/>
        <View style={styles.content}>
          <ScoreBoard timer={timer} shot={shot}/>
          <Spacer/>
          <TouchableWithoutFeedback onPress={setFocus}>
            <Card>
              <Text style={styles.text}>Type a number</Text>
              <TextInput style={styles.input} keyboardType='number-pad' maxLength={gameInitials.randomNumberUpLimit.toString().length}
              value={number} onChangeText={(text) => setNumber(text)} ref={inputRef}
              onSubmitEditing={handleGuess}/>
              <IconButton title="GUESS" icon="target" onPress={handleGuess}/>
            </Card>
          </TouchableWithoutFeedback>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text:{
    fontSize:20,
    color:colors.color4
  },
  input:{
    fontSize:25,
    color:colors.color7,
    borderBottomColor:colors.color4,
    borderBottomWidth:1,
    marginBottom:10,
    padding:5
  }
})