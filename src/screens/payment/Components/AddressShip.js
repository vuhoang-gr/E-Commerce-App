import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CUSTOM_COLOR} from '../../../constants/colors';
import scale from '../../../constants/responsive';
import textStyles from '../../../constants/textStyles';

const AddressShip = props => {
  const textButton = props.type === 'NoEdit' ? 'Change' : 'Edit';
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.detail}>
        <Text style={[styles.Name, textStyles.desItem]}>{props.data.name}</Text>
        <Text style={[styles.Address, textStyles.desText]}>
          {props.data.address}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Text
          style={[
            styles.Button,
            textStyles.desItem,
            {color: CUSTOM_COLOR.primary},
          ]}>
          {textButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.white,
    flexDirection: 'row',
    borderRadius: scale.scaleHeight(8),
  },
  detail: {
    marginLeft: scale.scaleWidth(44),
    width: scale.scaleWidth(235),
  },
  Name: {
    marginTop: scale.scaleHeight(18),
  },
  Address: {
    marginTop: scale.scaleHeight(7),
    marginBottom: scale.scaleHeight(24),
  },
  Button: {
    marginRight: scale.scaleHeight(23),
    marginTop: scale.scaleHeight(18),
  },
});

export default AddressShip;
