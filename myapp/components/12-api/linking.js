import { StyleSheet, Button, View, Linking, Alert, Platform } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const MyLinking = () => {

    const openLink = async (url) => {
        const supported = await Linking.canOpenURL(url)
       if (supported) {
        await Linking.openURL(url)
       }else {
        Alert.alert('Sorry, we can\'t open that link')
       }
    }
  return (
    <View style={globalStyles.container}>
      <Button title='Click to visit' onPress={()=>openLink("https://google.com")}/>
      <Button title='Click to send message' color="red" onPress={()=>openLink("sms:+901346579")}/>
      <Button title='Click to send email' onPress={()=>openLink("mailto:info@google.com")}/>
      <Button title='Click to call' color="red" onPress={()=>openLink("tel:+901346579")}/>
    </View>
  )
}

export default MyLinking

const styles = StyleSheet.create({
    container:{
        paddingTop : Platform.OS === 'ios'? 20 : 0,
    }
})