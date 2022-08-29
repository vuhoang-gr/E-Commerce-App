import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import BackHeader from '../../components/BackHeader/BackHeader';
import AddressShip from './Components/AddressShip';
import {CUSTOM_COLOR} from '../../constants/colors';
import scale from '../../constants/responsive';
import SCREENS from '../../constants/screens';
import textStyles from '../../constants/textStyles';
import CheckMoney from './Components/CheckMoney';
import CustomButton from '../../components/Button/CustomButton';
import {
  IMG_MasterCard,
  IMG_Dhl,
  IMG_Fedex,
  IMG_Usps,
} from '../../assets/images';
import Delivery from './Components/Delivery';

const DataAddress = {
  name: 'Jane Doe',
  address: '3 Newbridge Court Chino Hills, CA 91709, United States',
};

const CheckOut = props => {
  const {navigation} = props;
  const dataPayment = {
    Number: 123556,
  };
  const cardNumber =
    '* * * *  * * * *  * * * *  ' + (dataPayment.Number % 10000);
  const Money = {
    order: 123,
    delivery: 5,
  };
  return (
    <View style={styles.container}>
      <BackHeader
        options={{leftRouteName: null}}
        title={'CheckOut'}></BackHeader>
      <View style={styles.boxDetail}>
        {/* Address */}
        <View>
          <Text
            style={[textStyles.subHead, {marginBottom: scale.scaleHeight(21)}]}>
            Shipping address
          </Text>
          <AddressShip
            data={DataAddress}
            type={'NoEdit'}
            onPress={() =>
              navigation.navigate(SCREENS.ADDRESS_EDIT)
            }></AddressShip>
        </View>
        {/* Payment */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={[textStyles.subHead]}>Payment</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale.scaleHeight(17),
              }}>
              <View style={styles.backgroundPaymentCard}>
                <Image source={IMG_MasterCard}></Image>
              </View>
              <Text
                style={[
                  textStyles.desItem,
                  {marginLeft: scale.scaleWidth(17)},
                ]}>
                {cardNumber}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{marginRight: scale.scaleWidth(16)}}
            onPress={() => navigation.navigate(SCREENS.PAYMENT_EDIT)}>
            <Text
              style={[
                styles.Button,
                textStyles.desItem,
                {color: CUSTOM_COLOR.primary},
              ]}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        {/* Delivery method */}
        <View>
          <Text
            style={[textStyles.subHead, {marginBottom: scale.scaleHeight(21)}]}>
            Delivery method
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Delivery source={IMG_Fedex}></Delivery>
            <Delivery source={IMG_Usps}></Delivery>
            <Delivery source={IMG_Dhl}></Delivery>
          </View>
        </View>
        {/* Check order */}
        <View>
          <CheckMoney title="Order:" cost={Money.order}></CheckMoney>
          <CheckMoney title="Delivery:" cost={Money.delivery}></CheckMoney>
          <CheckMoney
            title="Summary:"
            cost={Money.order + Money.delivery}></CheckMoney>
        </View>
        <CustomButton
          title={'SUBMIT ORDER'}
          style={{marginBottom: scale.scaleHeight(13)}}
          onPress={() => navigation.navigate(SCREENS.SUCCESS)}></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.background,
  },
  boxDetail: {
    marginTop: scale.scaleHeight(31),
    marginLeft: scale.scaleWidth(16),
    marginRight: scale.scaleWidth(16),
    flex: 1,
    justifyContent: 'space-between',
  },

  backgroundPaymentCard: {
    backgroundColor: CUSTOM_COLOR.white,
    width: scale.scaleWidth(64),
    height: scale.scaleHeight(38),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale.scaleHeight(8),
  },
});

export default CheckOut;
