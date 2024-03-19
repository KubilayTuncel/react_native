import { Button, Dimensions, StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { Marker } from'react-native-maps';
import * as Location from "expo-location"

const MapsScreen = () => {

    const [latitudeDelta, setLatitudeDelta] = useState(5)
    const [coords, setCoords] = useState(null)

    const screen = Dimensions.get("window")

    const getPermission = async () => { 
        const resp = await Location.getForegroundPermissionsAsync();
        if (!resp.granted) {
          const {status} =await Location.requestForegroundPermissionsAsync();
          if(status!== 'granted'){
            Alert.alert("Warning",'The location permission is required');
            return;
          }
        }

        const location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords)
     }

     useEffect(() => {
        getPermission()
     }, [])
     
if(!coords) return <View></View>
else
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      showsUserLocation={true}
      userLocationPriority='balanced'
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: latitudeDelta * (screen.width/screen.height)
      }}>
        <Marker coordinate={{
          latitude: coords.latitude,
          longitude: coords.longitude
        }}/>
        </MapView>     
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({
  container: {
    flex:1
  },
    map:{
       flex: 1,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      position:'absolute',
      bottom: 10,
      width:"100%"
    }
})