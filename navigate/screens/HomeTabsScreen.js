import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreeen from './ProductsScreeen';
import ShoppingCardScreen from './ShoppingCardScreen';
import FaIcon from "@expo/vector-icons/FontAwesome6"

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  return (
    <Tab.Navigator initialRouteName="products" screenOptions={{
        tabBarStyle:styles.tabBar,
        tabBarLabelStyle:styles.tabBarLabel,
        headerShown:false,

    }}>
    <Tab.Screen name="products" component={ProductsScreeen} options={{
        tabBarLabel:"Product",
        tabBarIcon:()=><FaIcon name="layer-group" size={20}/>
    }}/>
    <Tab.Screen name="shopping-cart" component={ShoppingCardScreen} options={{
        tabBarLabel:"Shopping Cart",
        tabBarIcon:()=><FaIcon name="cart-shopping" size={20}/>
    }}/>
  </Tab.Navigator>
  )
}

export default HomeTabsScreen

const styles = StyleSheet.create({
    tabBar:{
        height:70
    },
    tabBarLabel:{
        fontSize:15,
    }
})