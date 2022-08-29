import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {CUSTOM_COLOR} from '../../../constants/colors';
import scale from '../../../constants/responsive';
import textStyles from '../../../constants/textStyles';
const Delivery = props => {
  return (
    <View style={styles.container}>
      <Image
        source={props.source}
        style={{marginTop: scale.scaleHeight(17)}}></Image>
      <Text style={[textStyles.helper, {marginBottom: scale.scaleHeight(16)}]}>
        2 - 3 days
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale.scaleWidth(100),
    height: scale.scaleHeight(72),
    backgroundColor: CUSTOM_COLOR.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: scale.scaleHeight(8),
  },
});

export default Delivery;
