import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../constants/colors';
import scale from '../../constants/responsive';
import FONTS from '../../constants/fonts';

const TagComponent = props => {
  const {type, sale, style} = props;
  let str = '-%';
  const Content =
    type === 'sale' ? str.slice(0, 1) + sale + str.slice(1) : 'NEW';
  const tagColor = type === 'sale' ? CUSTOM_COLOR.primary : CUSTOM_COLOR.black;
  return (
    <View style={{...styles.tagContainer, backgroundColor: tagColor, ...style}}>
      <Text style={styles.text}>{Content}</Text>
    </View>
  );
};

export default TagComponent;

const styles = StyleSheet.create({
  tagContainer: {
    height: scale.scaleHeight(24),
    width: scale.scaleWidth(40),
    borderRadius: scale.scaleHeight(29),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale.scaleHeight(6),
  },
  text: {
    color: CUSTOM_COLOR.white,
    fontSize: scale.scaleHeight(13),
    fontFamily: FONTS.Metropolis.Medium,
  },
});
