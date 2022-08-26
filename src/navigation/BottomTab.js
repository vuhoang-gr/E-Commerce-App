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
import {
  IC_Back,
  IC_Bag,
  IC_Heart,
  IC_Home,
  IC_Profile,
  IC_Shop,
} from '../assets/icons';
import scale from '../constants/responsive';
import textStyles from '../constants/textStyles';
import {CUSTOM_COLOR} from '../constants/colors';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const styteTabBarIcon = {
    height: scale.scaleHeight(42),
    width: scale.scaleWidth(30),
    justifyContent: 'center',
    alignContent: 'center',
  };
  return (
    <NavigationContainer>
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
          component={MainPage}
          options={{
            tabBarIcon: ({focused}) => {
              const ColorIcon = focused ? CUSTOM_COLOR.primary : null;
              const ColorText = focused
                ? CUSTOM_COLOR.primary
                : CUSTOM_COLOR.gray;
              return (
                <View
                  style={{
                    styteTabBarIcon,
                  }}>
                  <IC_Home
                    style={{width: 30, height: 30, borderColor: ColorIcon}}
                    fill={ColorIcon}></IC_Home>
                  <Text style={[textStyles.iconTabBar, {color: ColorText}]}>
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
                <View style={{styteTabBarIcon}}>
                  <IC_Shop
                    style={{
                      width: 30,
                      height: 30,
                      borderColor: ColorIcon,
                    }}
                    fill={ColorIcon}></IC_Shop>
                  <Text style={[textStyles.iconTabBar, {color: ColorText}]}>
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
                <View style={{styteTabBarIcon}}>
                  <IC_Bag
                    style={{width: 30, height: 30, borderColor: ColorIcon}}
                    fill={ColorIcon}></IC_Bag>
                  <Text style={[textStyles.iconTabBar, {color: ColorText}]}>
                    Bag
                  </Text>
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
                <View style={{styteTabBarIcon}}>
                  <IC_Heart
                    style={{width: 30, height: 30, borderColor: ColorIcon}}
                    fill={ColorIcon}></IC_Heart>
                  <Text style={[textStyles.iconTabBar, {color: ColorText}]}>
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
                <View style={{styteTabBarIcon}}>
                  <IC_Profile
                    style={{width: 30, height: 30, borderColor: ColorIcon}}
                    fill={ColorIcon}></IC_Profile>
                  <Text style={[textStyles.iconTabBar, {color: ColorText}]}>
                    Profile
                  </Text>
                </View>
              );
            },
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
