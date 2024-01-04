import { Modal, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import IconButton from '../09-custom-component/icon-button'
import Spacer from '../09-custom-component/spacer'


const AddCategory = (props) => {

    const {modalVisiable, setModalVisiable, setCategories} = props
    const [categoryName, setcategoryName] = useState("")
    const [categoryDesc, setcategoryDesc] = useState("")

    const addCategory = () => { 
        if (!categoryName || !categoryDesc) {
            Alert.alert("Attention!","Please enter category name and description", [{text:"OK"}])
            return;
        }

        const newCategory = {
                id: Date.now() + Math.floor(Math.random() * 1000),
                title: categoryName,
                desc: categoryDesc
            }

        setCategories(prev=>[newCategory, ...prev])
        setModalVisiable(false)
    }

  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisiable}
    onRequestClose={()=>{
        // android cihazlarda bacl button a tiklandiginda burasi calisir.
        setModalVisiable(false)
    }}
    >
      <View style={styles.container}>
        <Text>New Category</Text>
        <Spacer height={20}/>
        <TextInput placeholder="Category Title" style={styles.textInput}
         value={categoryName}
         onChangeText={(text)=>setcategoryName(text)}/>
        <Spacer height={10}/>
        <TextInput placeholder="Category Description" style={styles.textInput}
        value={categoryDesc}
        onChangeText={(text)=>setcategoryDesc(text)}
        />
        <Spacer height={20}/>
        <View style={styles.button}>
            <IconButton title="Cancel" icon="close" 
            buttonStyle={{backgroundColor:"yellow"}} textStyle={{color:"black"}} 
            onPress={()=>setModalVisiable(false)}/>
             <Spacer height={10}/>   
            <IconButton title="Add" icon="plus" onPress={addCategory}/>
        </View>
      </View>
    </Modal>
  )
}

export default AddCategory

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 30,
        paddingTop: 50,
        backgroundColor: 'white',
    },
    textInput:{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
    },
    button:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    }
})