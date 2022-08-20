import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SCREENS from '../constants/screens';
import AuthScreen from '../screens/Auth';
import ForgotScreen from '../screens/Auth/ForgotScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator 
    initialRouteName={SCREENS.AUTH} 
    screenOptions={{
      headerShown: false,
      animation: 'none',
    }}>
      <AuthStack.Screen name={SCREENS.AUTH} component={AuthScreen}/>
      <AuthStack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotScreen}/>
    </AuthStack.Navigator>
  )
}

export default AuthNavigator