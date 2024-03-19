import { StyleSheet, Button, View, TouchableOpacity } from 'react-native'
import {useRef} from 'react'
import BottomSheet from 'reanimated-bottom-sheet'

const ProfileScreen = () => {
  const sheetRef = useRef(null)

const renderContent = () => (
<View style={styles.content}>
  <View style={styles.titles}>
    <Text style={styles.mainTitle}>Upload Photo</Text>
    <Text style={styles.subTitle}>Choose your Profile Picture</Text>
  </View>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Upload Photo</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Choose From Gallery</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Cancel</Text>
  </TouchableOpacity>
</View>
)

const renderHeader = () => (
  <View style={styles.headerContainer}>
    <View style = {styles.headerButton}>
    </View>
  </View>
)

  return (
    <>
      <View style={styles.container}>
        <Button title="Open" onPress={()=>sheetRef.current.snapTo(0)}/>
        <Button title="Close" onPress={()=>sheetRef.current.snapTo(1)}/>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 50]}
        initialSnap={0}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  headerContainer: {
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:50,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    paddingTop: 20,
  },
  headerButton: {
    width:100,
    height:8,
    backgroundColor:"green",
    borderRadius:5
  },
  content:{
    padding:20,
    backgroundColor:"white",
    height:"100%"
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
  }
})
