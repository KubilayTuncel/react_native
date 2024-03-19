import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Index = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Flex1" onPress={()=>navigation.navigate("Flex1")}/>
      <Button title="Flex2" onPress={()=>navigation.navigate("Flex2")}/>
      <Button title="Flex3" onPress={()=>navigation.navigate("Flex3")}/>
      <Button title="Flex4" onPress={()=>navigation.navigate("Flex4")}/>
      <Button title="Flex5" onPress={()=>navigation.navigate("Flex5")}/>
      <Button title="Flex6" onPress={()=>navigation.navigate("Flex6")}/>
      <Button title="Flex7" onPress={()=>navigation.navigate("Flex7")}/>
      <Button title="Flex8" onPress={()=>navigation.navigate("Flex8")}/>
      <Button title="Internal" onPress={()=>navigation.navigate("Internal")}/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex:1,
      }
})