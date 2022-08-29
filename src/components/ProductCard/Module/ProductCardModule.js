import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IC_Star, IC_Yellow_Star, IC_X_GRAY} from '../../../assets/icons';
import scale from '../../../constants/responsive';
import React from 'react';
import TagComponent from '../TagComponent';
import textStyles from '../../../constants/textStyles';
import {CUSTOM_COLOR} from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

const PRODUCT_CARD_MODULE = props => {
  const {
    nameOfProduct,
    img_source,
    Brand,
    rate,
    numberOfRate,
    cost,
    sale,
    TYPE,
    color,
    size,
    available,
    onPress,
    onPress_delete,
    style,
  } = props;
  const CardWidth =
    TYPE === 'main' ? scale.scaleWidth(150) : scale.scaleWidth(164);
  const CardHeight =
    TYPE === 'favorite' ? scale.scaleHeight(281) : scale.scaleHeight(260);
  const listStart = [];
  const listYellowStar = RATE => {
    for (let i = 0; i < RATE; i++) {
      listStart.push(<IC_Yellow_Star style={styles.starContainer} key={i} />);
    }
    for (let i = RATE; i < 5; i++) {
      listStart.push(<IC_Star style={styles.starContainer} key={i} />);
    }
    return listStart;
  };
  let type = '';
  if (numberOfRate === 0 && available === true) {
    type = 'new';
  }
  if (sale !== 0 && available === true) {
    type = 'sale';
  }
  const opacity = available === true ? 1 : 0.4;
  const Press_able = available === true ? onPress : null;
  const newPrice = (cost * (100 - sale)) / 100;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={Press_able}
      style={{height: CardHeight, width: CardWidth, ...style}}>
      <View
        style={{
          overflow: 'hidden',
          borderRadius: 7,
          width: CardWidth,
          height: scale.scaleHeight(184),
        }}>
        <ImageBackground
          opacity={opacity}
          key={(type, sale)}
          style={{
            height: scale.scaleHeight(184),
            width: CardWidth,
          }}
          source={img_source}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 6}}>
              {type === '' ? null : <TagComponent type={type} sale={sale} />}
            </View>
            <View style={{flex: 1}}>
              {TYPE === 'favorite' ? (
                <TouchableOpacity onPress={onPress_delete}>
                  <IC_X_GRAY
                    style={{
                      ...styles.starContainer,
                      opacity: 1,
                      marginTop: scale.scaleHeight(6),
                    }}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          {available === true ? null : (
            <>
              <View opacity={0.6} style={styles.soldOut}>
                <Text
                  style={{
                    ...textStyles.desText,
                    opacity: 1,
                    color: CUSTOM_COLOR.black,
                    fontSize: 14,
                  }}>
                  {'Sorry, this item is currently sold out'}
                </Text>
              </View>
            </>
          )}
        </ImageBackground>
      </View>
      <View style={{opacity: opacity}}>
        <View style={styles.contentContainer}>
          {listYellowStar(rate)}
          <Text style={textStyles.helper}>{'(' + numberOfRate + ')'}</Text>
        </View>
        <Text
          style={{
            ...textStyles.helper,
          }}>
          {Brand}
        </Text>
        <Text
          style={{
            ...textStyles.subHead,
            marginTop: scale.scaleHeight(-4),
          }}>
          {nameOfProduct}
        </Text>
        {TYPE === 'favorite' ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={textStyles.helper}>{'Color: '}</Text>
              <Text style={styles.text}>{color}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={textStyles.helper}>{'  Size: '}</Text>
              <Text style={styles.text}>{size}</Text>
            </View>
          </View>
        ) : null}
        {sale === 0 || available === false ? (
          <Text style={textStyles.desItem}>{cost}</Text>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: CUSTOM_COLOR.gray,
                fontFamily: FONTS.Metropolis.Regular,
              }}>
              {cost + '$'}
            </Text>
            <Text
              style={{
                color: CUSTOM_COLOR.primary,
                fontFamily: FONTS.Metropolis.Regular,
              }}>
              {' ' + newPrice + '$'}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PRODUCT_CARD_MODULE;

const styles = StyleSheet.create({
  starContainer: {
    height: scale.scaleHeight(20),
    width: scale.scaleWidth(20),
  },
  contentContainer: {
    marginTop: 6,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONTS.Metropolis.Medium,
    fontSize: scale.scaleHeight(12),
  },
  soldOut: {
    justifyContent: 'center',
    height: scale.scaleHeight(36),
    width: scale.scaleWidth(163),
    marginTop: scale.scaleHeight(130),
    backgroundColor: CUSTOM_COLOR.white,
    opacity: 0.7,
  },
});
