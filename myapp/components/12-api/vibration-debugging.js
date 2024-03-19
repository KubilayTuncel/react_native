import { StyleSheet, Button, View, Vibration } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const MyVibration = () => {

    const handleVibration = () => { 
        Vibration.vibrate([1000, 2000, 500, 3000]) //1 sn wait, 2 sn vibration so on.
        Vibration.vibrate([1000, 2000, 500], true) //1 sn wait, 2 sn vibration so on. continuesly until stop
     }

     const stopVibration = () => { 
        Vibration.cancel()
     }
     //Debugging icin terminal kisminda M harfine basinda cihazda inpector aciliyor. Cok yararli. ***************

  return (
    <View style={globalStyles.container}>
      <Button title="Vibration" onPress={handleVibration}/>
      <Button title="Stop Vibration" onPress={stopVibration}/>
    </View>
  )
}

export default MyVibration

const styles = StyleSheet.create({})