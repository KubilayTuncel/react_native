import { StyleSheet, FlatList} from 'react-native'
import React from 'react'
import City from './city'

const CityList = ({cities}) => {
  return (
    <FlatList style={styles.list}
    data={cities}
    keyExtractor={(item,index)=> index}
    renderItem={itemObj => <City cityName={itemObj.item}/>}
/>
  )
}

export default CityList

const styles = StyleSheet.create({
    list:{
        marginTop:10
    },
})