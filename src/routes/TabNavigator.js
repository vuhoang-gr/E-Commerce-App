import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SCREENS from '../constants/screens';
import MainPage from '../screens/MainPage';
import MyBag from '../screens/MyBag';
import MyFavorite from '../screens/MyFavorite';
import MyProfile from '../screens/MyProfile';
import Categories from '../screens/Categories';
import {IC_Bag, IC_Heart, IC_Home, IC_Profile, IC_Shop} from '../assets/icons';
import scale from '../constants/responsive';
import textStyles from '../constants/textStyles';
import {CUSTOM_COLOR} from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const styleTabBarIcon = {
    height: scale.scaleHeight(42),
    width: scale.scaleWidth(30),
    alignSelf: 'center',
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            height: scale.scaleHeight(49),
            width: scale.scaleWidth(383),
          },
          null,
        ],
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
            const ColorText = focused
              ? CUSTOM_COLOR.primary
              : CUSTOM_COLOR.gray;
            return (
              <View
                style={{
                  styleTabBarIcon,
                }}>
                <IC_Home
                  style={{width: 30, height: 30, borderColor: ColorIcon}}
                  fill={ColorIcon}></IC_Home>
                <Text style={[textStyles.helper, {color: ColorText}]}>
                  Home
                </Text>
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={SCREENS.SHOP}
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => {
            const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
            const ColorText = focused
              ? CUSTOM_COLOR.primary
              : CUSTOM_COLOR.gray;
            return (
              <View style={{styleTabBarIcon}}>
                <IC_Shop
                  style={{
                    width: 30,
                    height: 30,
                    borderColor: ColorIcon,
                  }}
                  fill={ColorIcon}></IC_Shop>
                <Text style={[textStyles.helper, {color: ColorText}]}>
                  Shop
                </Text>
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={SCREENS.BAG}
        component={MyBag}
        options={{
          tabBarIcon: ({focused}) => {
            const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
            const ColorText = focused
              ? CUSTOM_COLOR.primary
              : CUSTOM_COLOR.gray;
            return (
              <View style={{styleTabBarIcon}}>
                <IC_Bag
                  style={{width: 30, height: 30, borderColor: ColorIcon}}
                  fill={ColorIcon}></IC_Bag>
                <Text style={[textStyles.helper, {color: ColorText}]}>Bag</Text>
              </View>
            );
          },
        }}></Tab.Screen>

      <Tab.Screen
        name={SCREENS.FAVORITES}
        component={MyFavorite}
        options={{
          tabBarIcon: ({focused}) => {
            const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
            const ColorText = focused
              ? CUSTOM_COLOR.primary
              : CUSTOM_COLOR.gray;
            return (
              <View
                style={[
                  {styleTabBarIcon},
                  {justifyContent: 'center', alignItems: 'center'},
                ]}>
                <IC_Heart
                  style={{width: 30, height: 30, borderColor: ColorIcon}}
                  fill={ColorIcon}></IC_Heart>
                <Text style={[textStyles.helper, {color: ColorText}]}>
                  Favorite
                </Text>
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={MyProfile}
        options={{
          tabBarIcon: ({focused}) => {
            const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
            const ColorText = focused
              ? CUSTOM_COLOR.primary
              : CUSTOM_COLOR.gray;
            return (
              <View style={{styleTabBarIcon}}>
                <IC_Profile
                  style={{width: 30, height: 30, borderColor: ColorIcon}}
                  fill={ColorIcon}></IC_Profile>
                <Text style={[textStyles.helper, {color: ColorText}]}>
                  Profile
                </Text>
              </View>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
