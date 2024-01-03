import { View, Text } from "react-native"


const Flex6 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1, padding:20, justifyContent:"space-between"}}>
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:"gray", padding:10, alignItems:"center", flex:1, marginRight:10}}>
                <Text > Section 1</Text>
                </View>
                <View style={{backgroundColor:"red", padding:10, alignItems:"center", flex:2}}>
                <Text > Section 2</Text>
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:"red", padding:10, alignItems:"center", flex:2, marginRight:10}}>
                <Text > Section 3</Text>
                </View>
                <View style={{backgroundColor:"gray", padding:10, alignItems:"center", flex:1}}>
                <Text > Section 4</Text>
                </View>
            </View>
        </View>
    )
}

export default Flex6;