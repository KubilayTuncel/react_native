import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'
import bg from '../../assets/img/bg.jpg'

const BackgroundImage = () => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={bg} resizeMode="">
        <Text>background Images</Text>
        <Image style={styles.logo} source={require('../../assets/img/favicon.png')}/>
      </ImageBackground>
     
    </View>
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100
    }
})