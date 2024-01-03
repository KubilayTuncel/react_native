import {View, Text,StyleSheet} from "react-native"
import globalStyles from "../../assets/styles/globalStyles"


const FlexPractice = ()=>{
    return(
        <View style={[globalStyles.container, styles.container]}>
            <View style={[styles.button, {backgroundColor:"green"}]}>
                <Text style={styles.buttonText} >Section 1</Text>
            </View >
            <View style={styles.row}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Section 2</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Section 3</Text>
                </View>
                
            </View>
            <View style={styles.row}>
            <View style={[styles.button, {flex:2, backgroundColor:"blue"}]}>
                    <Text style={styles.buttonText}>Section 4</Text>
                </View>
                <View style={[styles.button, {flex:1, marginLeft:5}]}>
                    <Text style={styles.buttonText}>Section 5</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        padding:40,
        alignItems: "stretch",
    },
    button:{
        backgroundColor:"gray",
        borderRadius:10,
        padding:20,
        alignItems:"center"
    },
    buttonText:{
        fontSize:20,
        color:"white"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    }
})

export default FlexPractice