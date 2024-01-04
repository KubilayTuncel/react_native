import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons'

const Icons = () => {
  return (
    <View>
      <Text>Icons</Text>
      <MCIcon name={Platform.OS === 'ios' ? "magnify" : "cards-spade"} size={50} color="blue"/>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({})