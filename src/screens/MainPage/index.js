import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IC_Home, IC_Check} from '../../assets/icons';
const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
export default MainPage;
