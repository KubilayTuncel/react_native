import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../09-custom-component/icon-button'
import  globalStyles  from '../../assets/styles/globalStyles'

const CustomComponentExample = () => {
  return (
    <View style={globalStyles.container}>
      <IconButton title="Click me" icon="home-automation" 
      buttonStyle={{backgroundColor:"chocolate"}}
      textStyle={{color:"black"}}
      onPress={()=>alert("Hello")}/>
    </View>
  )
}

export default CustomComponentExample

const styles = StyleSheet.create({})