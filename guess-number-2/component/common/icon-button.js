import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons'

const IconButton = (props) => {

    const buttonTitle = props.title || "Icon Button"
    const icon = props.icon || "magnify-scan" 

  return (
    <TouchableHighlight style={[styles.button, props.buttonStyle]} {...props}>
        < >
            <MCIcon name={icon} style={[styles.text, styles.icon, props.textStyle]} />
            <Text style={[styles.text, props.textStyle]}>{buttonTitle}</Text>
        </>
        
    </TouchableHighlight>
  )
}

export default IconButton

const styles = StyleSheet.create({
    button:{
        flexDirection: 'row',
        backgroundColor:"green",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'white',
        fontSize: 20
    },
    icon:{
        fontSize:25,
        marginRight:5
    }
})