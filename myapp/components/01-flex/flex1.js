import { View, Text } from "react-native"


const Flex1 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1}}>
            <View style={{backgroundColor:"gray", padding:10, alignItems:"center"}}>
            <Text > Hello World En distaki view e flex 1 vermeliyiz ki uygulama tüm ekrani kaplasin.</Text>
            </View>
            <View style={{backgroundColor:"red", padding:10, alignItems:"center"}}>
            <Text > Section 2</Text>
            </View>
            <View style={{backgroundColor:"green", padding:10, alignItems:"center"}}>
            <Text > Section 3</Text>
            </View>
            </View>
    )
}

export default Flex1;