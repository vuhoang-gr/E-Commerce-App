//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IC_Star, IC_Yellow_Star, IC_X} from '../../assets/icons';
import {CUSTOM_COLOR} from '../../constants/colors';
import scale from '../../constants/responsive';
import textStyles from '../../constants/textStyles';

// create a component
const ProductCardListCatalog = props => {
  const {
    nameOfProduct,
    img,
    color,
    size,
    nameOfShop,
    rate,
    numberOfRate,
    numOfProduct,
    cost,
    rightComponent,
    onPress,
  } = props;
  const {type} = props;
  const listStart = [];
  const listYellowStar = rate => {
    for (let i = 0; i < rate; i++) listStart.push(<IC_Yellow_Star key={i} />);
    for (let i = rate; i < 5; i++) listStart.push(<IC_Star key={i} />);
    return listStart;
  };

  return (
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={img} />
        </View>
        <View style={{overflow: 'visible'}}>
          {type === 'catalog' || type === 'order' ? (
            <>
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
            </>
          ) : type === 'favorites' ? (
            <>
              <Text
                style={[
                  textStyles.helper,
                  {
                    marginLeft: scale.scaleWidth(10),
                    marginTop: scale.scaleHeight(11),
                  },
                ]}>
                {nameOfShop}
              </Text>
              <Text
                style={[
                  textStyles.subHead,
                  {
                    marginLeft: scale.scaleWidth(10),
                  },
                ]}>
                {nameOfProduct}
              </Text>
            </>
          ) : null}
          {type === 'catalog' ? (
            <>
              <View style={styles.rateContainer}>
                {listYellowStar(rate)}
                <Text style={textStyles.helper}>
                  {'(' + numberOfRate + ')'}
                </Text>
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
            </>
          ) : type === 'order' || type === 'favorites' ? (
            <>
              <View style={styles.bottomContainer}>
                <View style={styles.colorCostContainer}>
                  <View style={styles.colorContainer}>
                    <Text style={textStyles.helper}>{'Color: '}</Text>
                    <Text
                      style={[
                        textStyles.desText,
                        {fontSize: scale.scaleWidth(11)},
                      ]}>
                      {color}
                    </Text>
                  </View>
                  {type === 'favorites' ? (
                    <Text
                      style={[
                        textStyles.desItem,
                        {marginTop: scale.scaleHeight(7)},
                      ]}>
                      {cost}
                    </Text>
                  ) : (
                    <View style={styles.unitsContainer}>
                      <Text style={textStyles.helper}>{'Units: '}</Text>
                      <Text
                        style={[
                          textStyles.desText,
                          {fontSize: scale.scaleWidth(11)},
                        ]}>
                        {numOfProduct}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.colorCostContainer}>
                  <View style={styles.colorContainer}>
                    <Text
                      style={[
                        textStyles.helper,
                        {marginLeft: scale.scaleWidth(40)},
                      ]}>
                      {'Size: '}
                    </Text>
                    <Text
                      style={[
                        textStyles.desText,
                        {fontSize: scale.scaleWidth(11)},
                      ]}>
                      {size}
                    </Text>
                  </View>
                  {type === 'favorites' ? (
                    <View style={styles.rateContainer1}>
                      {listYellowStar(rate)}
                      <Text style={textStyles.helper}>
                        {'(' + numberOfRate + ')'}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </>
          ) : null}
        </View>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        {type !== 'order' ? (
          <View style={styles.rightContainer}>
            {type === 'favorites' ? (
              <TouchableOpacity style={styles.iconX}>
                <IC_X />
              </TouchableOpacity>
            ) : null}
            <View style={styles.rightComponentContainer}>{rightComponent}</View>
          </View>
        ) : (
          <Text
            style={[textStyles.desItem, {marginTop: scale.scaleHeight(60)}]}>
            {cost}
          </Text>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container1: {
    height: scale.scaleHeight(104),
    width: scale.scaleWidth(343),
    backgroundColor: CUSTOM_COLOR.white,
    elevation: scale.scaleWidth(5),
    shadowColor: CUSTOM_COLOR.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale.scaleHeight(10),
    borderRadius: scale.scaleWidth(8),
    overflow: 'visible',
  },
  container: {
    height: scale.scaleHeight(104),
    width: scale.scaleWidth(305),
    flexDirection: 'row',
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
    alignItems: 'center',
    marginTop: scale.scaleHeight(5),
    marginLeft: scale.scaleWidth(10),
  },
  rateContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale.scaleHeight(10),
    marginLeft: scale.scaleWidth(40),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale.scaleHeight(5),
    marginLeft: scale.scaleWidth(10),
  },
  colorCostContainer: {
    // justifyContent: 'center',
    width: scale.scaleWidth(70),
  },
  colorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scale.scaleWidth(70),
  },
  unitsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scale.scaleHeight(5),
    width: scale.scaleWidth(70),
  },
  rightContainer: {
    justifyContent: 'space-around',
    width: scale.scaleWidth(36),
    height: '100%',
  },
  iconX: {
    marginTop: scale.scaleHeight(15),
    marginLeft: scale.scaleWidth(10),
  },
  rightComponentContainer: {
    width: scale.scaleWidth(36),
    height: scale.scaleWidth(36),
    borderRadius: scale.scaleWidth(18),
    marginTop: scale.scaleHeight(80),
    backgroundColor: CUSTOM_COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: scale.scaleWidth(5),
    shadowColor: CUSTOM_COLOR.black,
  },
});

//make this component available to the app
export default ProductCardListCatalog;
