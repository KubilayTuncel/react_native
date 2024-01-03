import { View, Text } from "react-native"


const Flex2 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1, alignItems:"stretch"}}>
            <View style={{backgroundColor:"gray", padding:10, alignItems:"center", justifyContent:"center", flex:1}}>
            <Text > Section 1</Text>
            </View>
            <View style={{backgroundColor:"red", padding:10, alignItems:"center", justifyContent:"center", flex:2}}>
            <Text > Section 2</Text>
            </View>
            <View style={{backgroundColor:"green", padding:10, alignItems:"center", justifyContent:"center", flex:3}}>
            <Text > Section 3</Text>
            </View>
            </View>
    )
}

export default Flex2;