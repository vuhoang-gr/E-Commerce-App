import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {CUSTOM_COLOR} from '../../constants/colors';
import scale from '../../constants/responsive';
import textStyles from '../../constants/textStyles';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
      activeOpacity={0.7}>
      <Text style={[textStyles.desText, {color: CUSTOM_COLOR.white}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.primary,
    height: scale.scaleHeight(48),
    borderRadius: scale.scaleWidth(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
