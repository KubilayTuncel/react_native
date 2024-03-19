import { ImageBackground, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import logoImage from "../assets/img/logo.png"
import bgImage from "../assets/img/bg.jpg"
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const DrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
       <ImageBackground source={bgImage} style={styles.bg} imageStyle={styles.bgImage}>
        <Image source={logoImage} style={styles.logo}/>
      </ImageBackground>
      <View style={{flex:1}}>
        <DrawerContentScrollView>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
      </View>
    </View >
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  bg:{
    height:200,
    width:"100%",
    justifyContent:"center",
    
  }
,
  logo:{
    height:200,
    width:100,
    opacity:0.5

  },
  bgImage: {
    opacity:0.8
  }
})