import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'


const THighlight = () => {

const sendMessage = () => { 
  console.log('send message')  
}

  return (
    <View style={globalStyles.container}>
      <TouchableHighlight onPress={sendMessage} style={styles.button} underlayColor="yellow">
        <Text>Touchable highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={sendMessage} style={styles.button} activeOpacity={0.7}>
        <Text>Touchable opacity</Text>
      </TouchableOpacity> 

      <TouchableWithoutFeedback onPress={sendMessage}>
        <Text>Touchable without feedback</Text>
      </TouchableWithoutFeedback>
   </View>
  )
}

export default THighlight

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
  },
})