import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SCREENS from '../constants/screens';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';

const MainTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <MainTab.Screen name={SCREENS.HOME} component={HomeScreen}/>
      <MainTab.Screen name={SCREENS.PROFILE} component={ProfileScreen}/>
    </MainTab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})