import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'
import homeLogo from '../../assets/img/Download.png'

const LocalImages = () => {
  return (
    <View style={globalStyles.container}>
      <Text>LocalImages</Text>
      <Image style={styles.logo} source={homeLogo}/>
    </View>
  )
}

export default LocalImages

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100
    }
})