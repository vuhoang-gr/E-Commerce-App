import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SCREENS from '../constants/screens';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingScreen from '../screens/Profile/SettingScreen';

const MainTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <MainTab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <MainTab.Screen name={SCREENS.MY_PROFILE} component={ProfileScreen} />
    </MainTab.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{
      headerShown: false,
      animation: 'none',
    }}>
      <MainStack.Screen name='lala' component={MainTabNavigator} />
      <MainStack.Screen name={SCREENS.SETTING} component={SettingScreen}/>
    </MainStack.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})