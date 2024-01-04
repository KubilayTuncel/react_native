import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Board from './board'
import Toolbar from './toolbar'
import globalStyles from '../../assets/styles/globalStyles'
import Spacer from '../09-custom-component/spacer'

const PracticeCounter = () => {

  const [counterVal, setCounterVal] = useState(0)

  return (
    <View style={styles.container}>
      <Board counterVal = {counterVal}/>
      <Spacer/>
      <Toolbar setCounterVal={setCounterVal}/>
    </View>
  )
}

export default PracticeCounter

const styles = StyleSheet.create({
  container:{
    padding: 20,
  }
})