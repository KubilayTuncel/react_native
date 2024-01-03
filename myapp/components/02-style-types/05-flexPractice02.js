import {View, Text,StyleSheet, Button} from "react-native"
import globalStyles from "../../assets/styles/globalStyles"


const FlexPractice2 = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText} >TechproEducation</Text>
                <Button title="..." color="#333333"/>
            </View >
            <View style={styles.content}>
                <View style={styles.image1}>
                    <Text >image 1</Text>
                </View>
               
                    <Text style={styles.desc}> <Text style={{fontWeight:"bold"}}>Lorem Ipsum</Text> ve baska itemlerlar gelecegi icin örnek teskil edecek yazi birakiyoruz.</Text>
                
                <View style={styles.imgContainer}>
                    <View style={styles.image2}></View>
                    <View style={styles.image3}></View>
                </View>
            </View>
            <View style={styles.footer}>
                <Button title="Tab 1" color="#333333"/>
                <Button title="Tab 2" color="#333333"/>
                <Button title="Tab 3" color="#333333"/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1
    },
    header:{
        backgroundColor:"orange",
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    headerText:{
        fontSize:20,
        color:"white"
    },
    footer:{
       backgroundColor:"orange",
       padding:10,
       flexDirection:"row",
       justifyContent:"space-around",
    },
    content:{
        flex:1,
        padding:20
    },
    image1:{
        backgroundColor:"gray",
        width:"100%",
        height:150,
        alignItems:"center"
    },
    desc:{
        marginVertical:20,
        fontSize:17
    },
    imgContainer:{
        flexDirection:"row"
    },
    image2:{
        backgroundColor:"gray",
        height:150,
        flex:2,
    },
    image3:{
        backgroundColor:"gray",
        height:150,
        flex:3,
        marginLeft:20
    }
})

export default FlexPractice2