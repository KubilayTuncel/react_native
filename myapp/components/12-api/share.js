import { StyleSheet, Button, View, Share } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const MyShare = () => {

    const onShare = async () => { 

        const result = await Share.share({
            message: 'Hello World http://play.google.com/guessGame',
        })

        if (result.action === Share.sharedAction) {

        }else if (result.action === Share.dismissedAction) { //IOS a özel

        }
     }

  return (
    <View style={globalStyles.container}>
      <Button onPress={onShare} title="Share Me"/>
    </View>
  )
}

export default MyShare

const styles = StyleSheet.create({})