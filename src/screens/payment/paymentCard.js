import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import SCREENS from '../../constants/screens';
import {RadioButton} from 'react-native-paper';
import BackHeader from '../../components/BackHeader';
import {CUSTOM_COLOR} from '../../constants/colors';
import textStyles from '../../constants/textStyles';
import scale from '../../constants/responsive';
import Card from '../../components/Card';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
const info = {
  name: 'Ho',
  date: '11/01',
  cardNumber: 123410,
  isVisa: true,
  CVV: '',
  key: 1,
};

const info2 = {
  name: 'Manh',
  date: '05/11',
  cardNumber: 94156,
  isVisa: false,
  CVV: '',
  key: 2,
};
const info3 = {
  name: 'Dinh',
  date: '05/11',
  cardNumber: 94156,
  isVisa: false,
  CVV: '',
  key: 3,
};

const data = [info, info2, info3];

const PaymentCard = props => {
  const [checked, setChecked] = React.useState(data[0].key);
  return (
    <View style={styles.container}>
      <BackHeader
        options={{leftRouteName: SCREENS.BAG}}
        title={'Payment Methods'}></BackHeader>
      <View style={styles.TextContainer}>
        <Text style={textStyles.subHead}>Your payment cards</Text>
      </View>
      <ScrollView>
        {data.map(info => {
          return (
            <View key={info.key}>
              <Card
                data={info}
                isSelection={info.key === checked ? true : false}></Card>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  value={info.key === checked ? true : false}
                  onValueChange={() => {
                    setChecked(info.key);
                  }}
                />
                <Text style={textStyles.desText}>
                  Use as default payment method
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.background,
  },
  TextContainer: {
    left: scale.scaleWidth(16),
    marginTop: scale.scaleHeight(31),
  },
});

export default PaymentCard;