import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({height}) => {
  return (
    <View style={{height: height || 30}}>
      
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({})