import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SCREENS from '../constants/screens';
const Stack = createStackNavigator();
import CheckOut from '../screens/payment/CheckOut';
import PaymentEdit from '../screens/payment/paymentEdit';
import AddressEdit from '../screens/payment/AddressEdit';
import SuccessScreen from '../screens/payment/successScreen';
import MainPage from '../screens/MainPage';
const PaymentNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREENS.CHECKOUT}
          component={CheckOut}></Stack.Screen>
        <Stack.Screen
          name={SCREENS.PAYMENT_EDIT}
          component={PaymentEdit}></Stack.Screen>
        <Stack.Screen
          name={SCREENS.ADDRESS_EDIT}
          component={AddressEdit}></Stack.Screen>
        <Stack.Screen
          name={SCREENS.SUCCESS}
          component={SuccessScreen}></Stack.Screen>
        <Stack.Screen name={SCREENS.HOME} component={MainPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default PaymentNavigator;
