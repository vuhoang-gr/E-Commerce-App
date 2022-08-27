import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from './TabNavigation/BottomTab';
import PaymentCard from './screens/payment/paymentCard';
import TabNavigator from './routes/TabNavigator';
const App = () => {
  return <PaymentCard></PaymentCard>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
