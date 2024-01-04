import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/globalStyles'

const Prsbl
 = () => {
  return (
    <View style={globalStyles.container}>
    <Pressable style={({pressed})=>pressed ? [styles.pressedButton, styles.button] : styles.button}>

        {({pressed}) => pressed? <Text>Press Me</Text> : <Text>Not Press Me</Text>}

            
    </Pressable>
     
    </View>
  )
}

export default Prsbl


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
    },
    pressedButton: {
        backgroundColor:"yellow",
        opacity: 0.7
    }
})