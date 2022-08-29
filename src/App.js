import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SuccessScreen from './screens/payment/successScreen';
import PaymentNavigator from './routes/PaymentNavigator';
import {RootNavigator} from './routes/RootNavigator';
import TabNavigator from './routes/TabNavigator';
const App = () => {
  return <TabNavigator></TabNavigator>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
