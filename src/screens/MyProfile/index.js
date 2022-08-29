import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MyProfile</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
export default MyProfile;
