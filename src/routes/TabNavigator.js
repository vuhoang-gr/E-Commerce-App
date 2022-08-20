import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SCREENS from '../constants/screens';
import HomeScreen from '../temp/HomeScreen';

const MainTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name={SCREENS.HOME} component={HomeScreen}/>
    </MainTab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})