import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const screen = Dimensions.get('window') // window dersek uygulamanin calisma ekranini verirken, screen kullanirsak cihazin standart ekran genisligini veriyor
    console.log(screen);
    
const MyDimentions = () => {

    
  return (
    <View style={[styles.container]}>
      <Text>font scale : {screen.fontScale}</Text>
      <Text>width : {screen.width}</Text>
      <Text>height : {screen.height}</Text>
      <Text>scale : {screen.scale}</Text>
    </View>
  )
}

export default MyDimentions

const styles = StyleSheet.create({
    container:{
        margin:20,
        padding:20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: screen.width-50,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius:10,
    }
})