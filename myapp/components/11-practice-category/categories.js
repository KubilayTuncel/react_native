import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../09-custom-component/icon-button'

const Categories = ({categories,setCategories}) => {

    const deleteCategory = (id) => { 
        const newData = categories.filter(category=>category.id!==id)
        setCategories(newData)
     }

  return (
    <View>
      <Text style={styles.name}>Categories ({categories.length})</Text>
      <FlatList data={categories} keyExtractor={(item, index)=>index}
       renderItem={
        (category) => 
          <View style={styles.category}>
            <View>
                <Text style={styles.name}>{category.item.title}</Text>
                <Text style={styles.desc}>{category.item.desc}</Text>
            </View>
            <IconButton icon="delete" title=" " buttonStyle={{backgroundColor:"white"}}
                textStyle={{color:"red"}} onPress={()=>deleteCategory(category.item.id)}/>
          </View>
        
      }/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    category:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    desc:{
        fontStyle: 'italic',
    }
})