import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SCREENS from '../../constants/screens';
import BackHeader from '../../components/BackHeader';
import {CUSTOM_COLOR} from '../../constants/colors';
import textStyles from '../../constants/textStyles';
import scale from '../../constants/responsive';
import Card from '../../components/Card';

const info = {
  name: '',
  date: '',
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
const data = [info, info2];

const PaymentCard = props => {
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
          return <Card data={info} key={info.key}></Card>;
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
