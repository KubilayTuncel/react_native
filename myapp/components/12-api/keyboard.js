import { StyleSheet, View, TextInput, Keyboard } from 'react-native'
import React from 'react'

const MyKeyboard = () => {

    const submitForm = () => { 
        console.log('Submitted');
        Keyboard.dismiss();
     }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Type somethings' onSubmitEditing={submitForm}/>
    </View>
  )
}

export default MyKeyboard

const styles = StyleSheet.create({
    container:{
        margin:20,
        padding:20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'red',
        borderRadius:10,
    }
})