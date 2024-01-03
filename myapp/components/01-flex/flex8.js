import { View, Text } from "react-native"


const Flex8 = () =>{
    return (
        <View style={{backgroundColor:"blue", flex:1, padding:20, alignItems:"flex-end"}}>
            
                <View style={{backgroundColor:"gray", padding:10,marginBottom:20, alignSelf:"center", flex:1}}>
                <Text > Section 1</Text>
                </View>
                <View style={{backgroundColor:"red", padding:10,marginBottom:20, alignSelf:"stretch", flex:1}}>
                <Text > Section 2</Text>
                </View>
                <View style={{backgroundColor:"red", padding:10 ,marginBottom:20, flex:1}}>
                <Text > Section 3, alignself yazmadik cünkü parent tan flex-end aliyor</Text>
                </View>
                <View style={{backgroundColor:"gray", padding:10, alignSelf:"flex-start", flex:1}}>
                <Text > Section 4</Text>
                </View>
            
        </View>
    )
}

export default Flex8;