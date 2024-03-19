import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StackNavigation = () => {
  return (
    <View>
      <Text>reactnavigation.org sitesi bu islem icin gerekli kurmamiz gereken tooolar var.
        expo ile baglantili iki farkli tool sypklememiz gerekiyor. Bunlar
        npm install @react-navigation/native
        npx expo install react-native-screens react-native-safe-area-context
        sonra native stack i kuruyoruz.  npm install @react-navigation/native-stack
      </Text>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})