import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const MyAlert = () => {

    const showMessage = () => { 
        Alert.alert("Alert Title", "Alert Message", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
            },
            {text: "OK",
             onPress: () =>console.log("OK Pressed")}])
     }
     //Alert in promp methodu da var ve kullanicidan bilgi almak icin kullanilabiliyor.

  return (
    <View style={globalStyles.container}>
      <Text>MyAlert</Text>
      <Button title="Click Me" onPress={showMessage}></Button>
    </View>
  )
}

export default MyAlert

const styles = StyleSheet.create({})