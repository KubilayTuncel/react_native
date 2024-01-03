import React, { useState } from 'react'
import { View, TextInput,Button, StyleSheet } from 'react-native'

const AddCity = ({addCity}) => {

    const[city,setCity] = useState("");
   

  return (
    <View>
         <TextInput style={styles.inputCity} placeholder="Where are you?" value={city} onChangeText={(text) => setCity(text)}></TextInput>
        <Button title="ADD" color="red" onPress={e=>{addCity(city); setCity("")}}/>

    </View>
  )
}

export default AddCity

const styles = StyleSheet.create({
    inputCity:{
        borderColor:"gray",
        borderWidth:1,
        padding:10,
        borderRadius:10,
        marginBottom:10
    },
})