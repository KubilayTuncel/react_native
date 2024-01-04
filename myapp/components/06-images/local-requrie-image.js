import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'
import homeLogo from '../../assets/img/Download.png'

const RequrieLocalImages = () => {
  return (
    <View style={globalStyles.container}>
      <Text>RequrieLocalImages</Text>
      <Image style={styles.logo} source={require('../../assets/img/favicon.png')}/>
    </View>
  )
}

export default RequrieLocalImages

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100
    }
})