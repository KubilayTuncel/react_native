import {View, Text,StyleSheet} from "react-native"

const Internal = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>bu internal stilldir.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"gray"
    },
    text:{
        fontSize:40,
        color:"white"
    }
})

export default Internal