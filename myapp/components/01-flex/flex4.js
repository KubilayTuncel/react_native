import { View, Text } from "react-native"


const Flex4 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1, flexDirection:"row", alignItems:"flex-start"}}>
            <View style={{backgroundColor:"gray", padding:10, flex:1, alignItems:"center"}}>
            <Text > Section 1</Text>
            </View>
            <View style={{backgroundColor:"red", padding:10, flex:2, alignItems:"center"}}>
            <Text > Section 2</Text>
            </View>
            <View style={{backgroundColor:"green", padding:10, flex:1, alignItems:"center"}}>
            <Text > Section 3</Text>
            </View>
            </View>
    )
}

export default Flex4;