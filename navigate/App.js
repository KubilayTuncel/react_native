
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreeen from './screens/ProductsScreeen';
import ProfileScreen from './screens/ProfileScreen';
import FollowersScreen from './screens/FollowersScreen';
import SettingsScreen from './screens/SettingsScreen';
import FaIcon from "@expo/vector-icons/FontAwesome6"
import DrawerContent from './components/drawer-content';
import HomeTabsScreen from './screens/HomeTabsScreen';
import MapsScreen from './screens/MapsScreen';
import {Provider as PaperProvider} from "react-native-paper"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer style={styles.container}>
        <Drawer.Navigator initialRouteName="Produtcs" screenOptions={{
          drawerType:"back", //front, back, slide, permanent
          drawerPosition:"left",
          drawerActiveTintColor:"#ef00ec",
          drawerStyle:styles.drawer,
          drawerLabelStyle:styles.label
        }}
          drawerContent={(props)=><DrawerContent{...props}/>}
        >
           <Drawer.Screen name="Home" component={HomeTabsScreen} options={{
            title:"Home",
            drawerIcon:()=><FaIcon name="house"/>
          }}/>
          <Drawer.Screen name="Products" component={ProductsScreeen} options={{
            title:"Products",
            drawerIcon:()=><FaIcon name="apple"/>
          }}/>
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{
           drawerIcon:()=><FaIcon name="user"/>
          }}/>
          <Drawer.Screen name="Followers" component={FollowersScreen}
          options={{
            drawerIcon:()=><FaIcon name="users"/>
           }}/>
          <Drawer.Screen name="Settings" component={SettingsScreen} 
          options={{
            drawerIcon:()=><FaIcon name="key"/>
           }}/>
           <Drawer.Screen name="Maps" component={MapsScreen} 
          options={{
            drawerIcon:()=><FaIcon name="map"/>
           }}/>
        </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer:{
    backgroundColor:"#b9f2dd"
  },
  label:{
    marginLeft:-20
  }
});
