import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const City = ({cityName}) => {
  return (
    <View>
      <Text style={styles.listItem}>{cityName}</Text>
    </View>
  )
}

export default City

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"#ededed",
        padding:10,
        borderRadius:10,
        marginBottom:10
    }
})