import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons'

const Board = ({counterVal}) => {
  return (
    <View style={styles.container}> 
        <View style={styles.title}>
            <MCIcon name='counter' size={30} color="black"/>
            <Text style>Counter</Text>
        </View>
      <Text style={styles.value}>{counterVal}</Text>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        fontSize: 50,
        fontWeight: 'bold',
    }

})