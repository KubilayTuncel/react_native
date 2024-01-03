import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const ExternalImage = () => {
  return (
    <View style={globalStyles.container}>
      <Text>ExternalImage</Text>
      <Image style={styles.logo} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}/>
    </View>
  )
}

export default ExternalImage

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100
    }
})