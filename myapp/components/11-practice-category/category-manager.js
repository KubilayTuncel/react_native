import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import FAB from '../09-custom-component/fab'
import Categories from './categories'
import AddCategory from './add-category'


const CategoryManager = () => {

    const [categories, setCategories] = useState([
        {
           id:1, title:"Nuts", desc:"huzelnuts, pistascho, wallnuts"
        },
        {
           id:2, title:"Vegetables", desc:"carrots, potatoes, broccoli"
        }
    ])

    const [modalVisiable, setModalVisiable] = useState(false)

  return (
    <View style={styles.container}>
        <Categories categories={categories} setCategories={setCategories}/>
        <AddCategory modalVisiable={modalVisiable} setModalVisiable={setModalVisiable} setCategories={setCategories}/>
      <FAB position='right' onPress={()=>setModalVisiable(true)}/>
    </View>
  )
}

export default CategoryManager

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25,
    }
})