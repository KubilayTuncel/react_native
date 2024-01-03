import {View, Text,StyleSheet} from "react-native"
import globalStyles from "../../assets/styles/globalStyles"


const External = ()=>{
    return(
        <View style={[globalStyles.container, styles.container, {backgroundColor:"blue"}]}>
            <Text >bu External stilldir.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
})

export default External