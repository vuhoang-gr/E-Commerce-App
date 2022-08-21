//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IC_Star, IC_Yellow_Star} from '../../assets/icons';
import {CUSTOM_COLOR} from '../../constants/colors';
import scale from '../../constants/responsive';
import textStyles from '../../constants/textStyles';

// create a component
const ProductCardListCatalog = props => {
  const {
    nameOfProduct,
    img,
    nameOfShop,
    rate,
    numberOfRate,
    cost,
    rightComponent,
  } = props;
  const listStart = [];
  const listYellowStar = rate => {
    for (let i = 0; i < rate; i++) listStart.push(<IC_Yellow_Star />);
    for (let i = rate; i < 5; i++) listStart.push(<IC_Star />);
    return listStart;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img} />
      </View>
      <View style={{overflow: 'visible'}}>
        <Text
          style={[
            textStyles.subHead,
            {
              marginLeft: scale.scaleWidth(10),
              marginTop: scale.scaleHeight(11),
            },
          ]}>
          {nameOfProduct}
        </Text>
        <Text
          style={[
            textStyles.helper,
            {
              marginLeft: scale.scaleWidth(10),
            },
          ]}>
          {nameOfShop}
        </Text>
        <View style={styles.rateContainer}>
          {listYellowStar(rate)}
          <Text style={textStyles.helper}>{'(' + numberOfRate + ')'}</Text>
        </View>
        <Text
          style={[
            textStyles.desItem,
            {
              marginLeft: scale.scaleWidth(10),
              marginTop: scale.scaleHeight(5),
            },
          ]}>
          {cost}
        </Text>
        <View style={styles.rightComponentContainer}>{rightComponent}</View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: scale.scaleHeight(104),
    width: scale.scaleWidth(343),
    backgroundColor: CUSTOM_COLOR.white,
    elevation: scale.scaleWidth(5),
    shadowColor: CUSTOM_COLOR.black,
    flexDirection: 'row',
    marginTop: scale.scaleHeight(10),
    borderRadius: scale.scaleWidth(8),
    overflow: 'visible',
  },
  imageContainer: {
    // height: scale.scaleHeight(105),
    width: scale.scaleWidth(105),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  rateContainer: {
    flexDirection: 'row',
    marginTop: scale.scaleHeight(5),
    marginLeft: scale.scaleWidth(10),
  },
  rightComponentContainer: {
    width: scale.scaleWidth(36),
    height: scale.scaleWidth(36),
    borderRadius: scale.scaleWidth(18),
    marginLeft: scale.scaleWidth(202),
    backgroundColor: CUSTOM_COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: scale.scaleWidth(5),
    shadowColor: CUSTOM_COLOR.black,
  },
});

//make this component available to the app
export default ProductCardListCatalog;
