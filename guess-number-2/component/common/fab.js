import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons'

const FAB = (props) => {

    const icon = props.icon || "plus" 
    const buttonPosition = props.position || "right"

    const positionStyle = buttonPosition === "right"? {right:20} : {left:20};

  return (
    <TouchableHighlight style={[styles.button, props.buttonStyle, positionStyle]} {...props}>
        
        <MCIcon name={icon} style={[styles.icon, props.textStyle]} />
        
    </TouchableHighlight>
  )
}

export default FAB

const styles = StyleSheet.create({
    button:{
        width: 50,
        height: 50,
        backgroundColor:"green",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
    },
    icon:{
        fontSize:25,
        color:"white"
    }
})