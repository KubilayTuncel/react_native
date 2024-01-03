import { View, Text } from "react-native"


const Flex5 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1, flexDirection:"row", alignItems:"flex-end", justifyContent:"space-evenly"}}>
            <View style={{backgroundColor:"gray", padding:10, alignItems:"center"}}>
            <Text > Section 1</Text>
            </View>
            <View style={{backgroundColor:"red", padding:10, alignItems:"center"}}>
            <Text > Section 2</Text>
            </View>
            </View>
    )
}

export default Flex5;