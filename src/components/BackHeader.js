import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IC_Back} from '../assets/icons';
import {Shadow} from '../constants/customStyles';
import {CUSTOM_COLOR} from '../constants/colors';
import scale from '../constants/responsive';
import {HEADER_HEIGHT, PADDING_HORIZONTAL} from '../constants/size';
import textStyles from '../constants/textStyles';

const BackHeader = props => {
  const {title, navigation, options} = props;

  const rightComponent =
    options.rightComponent !== undefined ? options.rightComponent : null;

  const leftRouteName =
    options.leftRouteName !== undefined ? options.leftRouteName : undefined;

  const {hasShadow, hasBorder} = options;

  const containerStyle = [
    styles.container,
    hasShadow ? styles.shadow : {},
    hasBorder
      ? {
          borderBottomColor: CUSTOM_COLOR.white,
          borderBottomWidth: 1,
        }
      : {},
    options?.headerBackground
      ? {backgroundColor: options?.headerBackground}
      : {},
    options?.headerStyle ? options?.headerStyle : {},
  ];

  return (
    <View style={containerStyle}>
      {options.hideLeftComponent ? (
        <View />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={
            options.backAction
              ? options.backAction
              : leftRouteName
              ? () => navigation.navigate(leftRouteName)
              : () => navigation.goBack()
          }>
          <IC_Back />
        </TouchableOpacity>
      )}

      <Text style={[textStyles.h3]}>{title}</Text>

      {rightComponent ? rightComponent : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    backgroundColor: CUSTOM_COLOR.white,
  },
  shadow: {
    ...Shadow,
  },
});

export default BackHeader;
