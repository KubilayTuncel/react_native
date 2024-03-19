import { StyleSheet, Text, View,TouchableOpacity, Image, Alert} from 'react-native'
import {useState, useEffect, useCallback} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';


const ProductsScreeen = () => {

  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
 
  const getPhotoFromCamera = async () => { 
    const result  = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
     setProfileImage(result.uri);
    }
   }

   const getPhotoFromLibrary = async () => { 
    const result  = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
   }
 
  const getPermission = async () => { 
    // mevcut izinleri kotrol ediyoruz.
    //Kamera izinleri kontrol ettik
    const respCamera = await ImagePicker.getCameraPermissionsAsync();
    if (!respCamera.granted) {
      const {status} =await ImagePicker.requestCameraPermissionsAsync();
      if(status !== 'granted'){
        Alert.alert('The camera permission is required');
      
      }
      
      //Gallery izinleri kontrol ettik
      const respLib =await ImagePicker.getMediaLibraryPermissionsAsync();
      if(!respLib.granted){
        const {status} =await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status!== 'granted'){
          Alert.alert('The library permission is required');
        }      
      }
    }

    
    
   }

   //navigation yapilarinda useEffect in load yöntemi dofru calismadigi icin useCallback kullandik

   useFocusEffect(
    useCallback(
      () => {
        getPermission();
      },[]
    )
   )


  return (
    <View style={styles.content}>
      <View style={styles.profileContainer}>
        <Image source={{uri:profileImage}} style={styles.profileImage}/>
      </View>
    <View style={styles.titles}>
      <Text style={styles.mainTitle}>Upload Photo</Text>
      <Text style={styles.subTitle}>Choose your Profile Picture</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={getPhotoFromCamera}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={getPhotoFromLibrary}>
      <Text style={styles.buttonText}>Choose From Gallery</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} >Cancel</Text>
    </TouchableOpacity>
    
  </View>
  )
}

export default ProductsScreeen

const styles = StyleSheet.create({
  content:{
    padding:20,
    backgroundColor:"white",
    height:"100%",
  
  },
  titles:{
    alignItems: 'center',
    marginBottom:20
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#da3f18"
  },
  subTitle: {
    fontSize:15,
    color:"gray"
  },
  button:{
    backgroundColor:"#da3f18",
    padding:10,
    borderRadius:10,
    alignItems:"center",
    marginVertical:5
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:15
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
   
  },
  profileContainer:{
    justifyContent:"center",
    alignItems:"center"
  }
})