import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

import {IMG_card, IMG_cardVisa} from '../assets/images';
import {CUSTOM_COLOR} from '../constants/colors';
import scale from '../constants/responsive';
import textStyles from '../constants/textStyles';

//import CheckBox from 'react-native-check-box';
const Card = props => {
  const {data, isSelection} = props;
  const cardNumber = '* * * *  * * * *  * * * *  ' + (data.cardNumber % 10000);

  if (!data.isVisa)
    return (
      <View style={styles.container}>
        <ImageBackground
          source={IMG_card}
          style={[styles.card, {opacity: isSelection ? 1 : 0.8}]}>
          <Text style={[textStyles.h2, styles.cardNumber]}>{cardNumber}</Text>
          <View style={styles.text}>
            <View>
              <Text style={[textStyles.helper, styles.CardHolderName]}>
                Card Holder Name
              </Text>
              <Text style={[textStyles.desText, styles.CardName]}>
                {data.name}
              </Text>
            </View>

            <View>
              <Text style={[textStyles.helper, styles.CardExpiryDate]}>
                Expiry Date
              </Text>
              <Text style={[textStyles.desText, styles.CardDate]}>
                {data.date}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View></View>
      </View>
    );
  else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={IMG_cardVisa}
          style={[styles.card, {opacity: isSelection ? 1 : 0.8}]}>
          <Text style={[textStyles.h2, styles.cardNumber]}>{cardNumber}</Text>
          <View style={styles.text}>
            <View>
              <Text style={[textStyles.helper, styles.CardHolderName]}>
                Card Holder Name
              </Text>
              <Text style={[textStyles.desText, styles.CardName]}>
                {data.name}
              </Text>
            </View>

            <View>
              <Text style={[textStyles.helper, styles.CardExpiryDate]}>
                Expiry Date
              </Text>
              <Text style={[textStyles.desText, styles.CardDate]}>
                {data.date}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: scale.scaleWidth(343),
    height: scale.scaleHeight(216),
  },
  cardNumber: {
    letterSpacing: -0.41,
    marginTop: scale.scaleHeight(87),
    marginLeft: scale.scaleWidth(35),
    color: CUSTOM_COLOR.white,
  },
  CardHolderName: {
    letterSpacing: -0.41,
    marginLeft: scale.scaleWidth(35),
  },
  CardName: {
    letterSpacing: -0.41,
    color: CUSTOM_COLOR.white,
    marginLeft: scale.scaleWidth(35),
    marginTop: scale.scaleHeight(5),
  },
  CardExpiryDate: {
    marginLeft: scale.scaleWidth(70),
  },
  CardDate: {
    letterSpacing: -0.41,
    color: CUSTOM_COLOR.white,
    marginLeft: scale.scaleWidth(70),
    marginTop: scale.scaleHeight(5),
  },
  text: {
    marginTop: scale.scaleHeight(35),
    flexDirection: 'row',
  },
});

export default Card;
