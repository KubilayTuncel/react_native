import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AddCity from './add-city';
import CityList from './city-list';


const FlatListComponent = () => {
    
    const [cities,setCities] = useState([]);

    const addCity = (city) => {
        setCities([...cities, city])
        
    }

  return (
    <View style={styles.container}>     
        <AddCity addCity={addCity}/>
        <CityList cities={cities} />
    </View>
  )
}


export default FlatListComponent

const styles= StyleSheet.create({
    container: {
        flex:1,
        padding:30
    }   
})