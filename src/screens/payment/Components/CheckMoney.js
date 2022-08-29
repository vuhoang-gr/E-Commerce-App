import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import scale from '../../../constants/responsive';
import textStyles from '../../../constants/textStyles';

const CheckMoney = props => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: scale.scaleHeight(14),
      }}>
      <Text style={textStyles.desText}>{props.title}</Text>
      <Text style={textStyles.desItem}>{props.cost} $ </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CheckMoney;
