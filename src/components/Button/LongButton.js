import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scale from '../../constants/responsive';
import {CUSTOM_COLOR} from '../../constants/colors';
import textStyles from '../../constants/textStyles';
import {IC_Arrow, IC_Pen} from '../../assets/icons';

const LongButton = props => {
  const {isActive, type} = props;
  const pressable = isActive === undefined ? true : isActive;
  const typeStyle = () => {
    if (type === 'outline') {
      return styles.outline;
    }
    if (type === 'review') {
      return styles.review;
    }
    return styles.primary;
  };
  const container = [
    styles.container,
    pressable
      ? null
      : props.type === 'outline'
      ? {opacity: 0.6}
      : {opacity: 0.8},
    typeStyle(),
    props.size === 'small' ? {width: '45%', height: scale.scaleHeight(36)} : {},
    props.style,
  ];
  return (
    <TouchableOpacity
      disabled={!pressable ? true : false}
      activeOpacity={0.8}
      style={container}
      onPress={props.onPress}>
      {type === 'review' ? <IC_Pen /> : null}
      <Text
        style={[
          textStyles.desItem,
          type === 'outline' ? {} : styles.textPrimary,
        ]}>
        {type === 'review' ? 'Write a review' : props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale.scaleHeight(48),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: scale.scaleWidth(25),
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: CUSTOM_COLOR.primary,
  },
  outline: {
    borderColor: CUSTOM_COLOR.black,
    borderRadius: scale.scaleWidth(25),
    borderWidth: 0.8,
  },
  review: {
    backgroundColor: CUSTOM_COLOR.primary,
    width: '40%',
    height: scale.scaleHeight(36),
  },
  textPrimary: {
    color: CUSTOM_COLOR.white,
  },
});
