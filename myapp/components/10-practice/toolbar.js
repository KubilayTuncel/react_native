import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../09-custom-component/icon-button'

const Toolbar = ({setCounterVal}) => {
  return (
    <View style={styles.container}>
     <IconButton title="Inc" icon="plus" 
     onPress={()=>setCounterVal((prevCount) => prevCount + 1)}/>
     <IconButton title="Dec" icon="minus"
     onPress={()=>setCounterVal((prevCount) => prevCount > 0 ? prevCount - 1 : 0)}/>
     <IconButton title="Res" icon="circle"
     onPress={()=> setCounterVal(0)}/>
    </View>
  )
}

export default Toolbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        
    },
    
})