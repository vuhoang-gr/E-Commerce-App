import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scale from '../../constants/responsive';
import {CUSTOM_COLOR} from '../../constants/colors';
import {Shadow} from '../../constants/customStyles';
import {IC_Facebook, IC_Google} from '../../assets/icons';

const SocialButton = props => {
  const {type} = props;
  const onFbHandle = () => {};
  const onGoogleHandle = () => {};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={type === 'fb' ? onFbHandle : onGoogleHandle}>
      {type === 'fb' ? <IC_Facebook /> : <IC_Google />}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    ...Shadow,
    borderRadius: scale.scaleWidth(24),
    width: scale.scaleWidth(92),
    height: scale.scaleHeight(64),
    backgroundColor: CUSTOM_COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
