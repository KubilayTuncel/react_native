import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../component/common/header'
import IconButton from '../component/common/icon-button'
import Spacer from '../component/common/spacer'
import Card from '../component/common/card'
import gameInitials from '../contants/game-initials'
import StoreContext from '../store'
import { useNavigation } from '@react-navigation/native'

const SummaryScreen = () => {
  const context = useContext(StoreContext)
  const navigation = useNavigation()

  const { gameResult, totalPoint, randomNumber, timer, shot, setTimer} = context
  const restartGame = () =>{
    setTimer(gameInitials.totalTimes)
    navigation.navigate("Game")
  }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{gameResult === "win" ? "🏆🏆🏆 YOU WIN 🏆🏆🏆" : "👎👎👎 YOU LOST 👎👎👎"}</Text>
          <Spacer/>
          <Card>
            <Text style={styles.text}>{totalPoint}</Text>
            <Text style={styles.viewText}>Points</Text>
          </Card>
          <Spacer/>
          <View style={styles.view}>
            <Text style={{fontWeight:"bold", fontSize:30}}>Summary</Text>
            <Text style={styles.viewText}>The number was : {randomNumber}</Text>
            <Text style={styles.viewText}>Total time : {timer}</Text>
            <Text style={styles.viewText}>Total shot : {shot}</Text>
          </View>
          <Spacer/>
          <IconButton title="Restart The Game" icon="gamepad-variant-outline" onPress={restartGame}/>
        </View>
        
    </View>
  )
}

export default SummaryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  view:{
    alignItems: 'center',
    fontSize:30
  },
  text:{
    fontSize:30,
    fontWeight:"bold"
  },
  viewText:{
    fontSize:20
  }

})