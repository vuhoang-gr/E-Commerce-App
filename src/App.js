import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from './navigation/BottomTab';
const App = () => {
  return <BottomTab></BottomTab>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
