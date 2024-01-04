import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../contants/color'

const Card = ({cardStyle, children}) => {
  return (
    <View style={[styles.card, cardStyle]}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        
        backgroundColor: colors.color3,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.color4,
        padding:20,
        alignItems: 'center'
    }
})