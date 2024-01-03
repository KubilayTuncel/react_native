import { View, Text, StyleSheet } from "react-native"


const Position01 = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.button}><Text style={styles.text}>+</Text></View>
        </View>
    )
}

export default Position01;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"blue"
    },
    button:{
        backgroundColor:"red",
        width:70,
        height:70,
        position: "absolute",
        right:20,
        bottom:20,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center",
        padding:5
    },
    text:{
        color:"white",
        fontSize:40
    }
})