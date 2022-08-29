import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import userApi from '../apis/userApi';
import {useSelector} from 'react-redux';
import {userSelect} from '../redux/selectors';

const HomeScreen = () => {
  const user = useSelector(userSelect);
  // console.log(user)
  return <Button title="sign out" onPress={() => userApi.signOut()} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
