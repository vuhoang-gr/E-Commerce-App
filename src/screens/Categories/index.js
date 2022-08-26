import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
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
    backgroundColor: 'red',
  },
});

export default Categories;
