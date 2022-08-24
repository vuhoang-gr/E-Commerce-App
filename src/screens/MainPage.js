import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import scale from '../constants/responsive';
import FONTS from '../constants/fonts';
import {IMG_MainPage, TEST_IMG} from '../assets/images';
import textStyles from '../constants/textStyles';
import LongButton from '../components/Button/LongButton';
import PRODUCT_CARD_MODULE from '../components/ProductCard/Module/ProductCardModule';
import React from 'react';
import {CUSTOM_COLOR} from '../constants/colors';

const TEST_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nameOfProduct: 'First Item',
    img_source: TEST_IMG,
    nameOfShop: 'hihi',
    rate: 0,
    numberOfRate: 0,
    cost: 100,
    sale: 0,
    TYPE: 'main',
    available: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nameOfProduct: 'Second Item',
    img_source: TEST_IMG,
    nameOfShop: 'hihi',
    rate: 0,
    numberOfRate: 0,
    cost: 100,
    sale: 20,
    TYPE: 'main',
    available: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nameOfProduct: 'Third Item',
    img_source: TEST_IMG,
    nameOfShop: 'hihi',
    rate: 0,
    numberOfRate: 0,
    cost: 100,
    sale: 0,
    TYPE: 'main',
    available: true,
  },
];

const MainPage = () => {
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <View style={styles.PictureContainer}>
        <ImageBackground style={styles.Picture} source={IMG_MainPage}>
          <View style={{flex: 5}} />
          <View style={{flex: 1, marginLeft: scale.scaleWidth(17)}}>
            <Text
              style={{
                fontFamily: FONTS.Metropolis.Black,
                fontSize: scale.scaleWidth(48),
                color: CUSTOM_COLOR.white,
              }}>
              {'Fashion'}
            </Text>
            <Text
              style={{
                marginTop: scale.scaleHeight(-20),
                fontFamily: FONTS.Metropolis.Black,
                fontSize: scale.scaleWidth(48),
                color: CUSTOM_COLOR.white,
              }}>
              {'sale'}
            </Text>
          </View>
          <View style={{flex: 1}} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={{marginLeft: scale.scaleWidth(17), flex: 1}}>
            <LongButton size={'small'} content={'Check'} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{height: scale.scaleHeight(10)}} />
      <View style={styles.newContainer}>
        <View style={styles.titleContainer}>
          <View style={{marginLeft: scale.scaleWidth(17), flex: 13}}>
            <Text style={textStyles.h1}>{'New'}</Text>
            <Text style={textStyles.helper}>
              {'You`ve never seen it before!'}
            </Text>
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={textStyles.desItem}>{'View all'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={TEST_DATA}
        horizontal={true}
        renderItem={({item}) => (
          <View style={{margin: scale.scaleWidth(10)}}>
            <PRODUCT_CARD_MODULE
              nameOfProduct={item.nameOfProduct}
              img_source={item.img_source}
              nameOfShop={item.nameOfShop}
              rate={item.rate}
              numberOfRate={item.numberOfRate}
              cost={item.cost}
              sale={item.sale}
              TYPE={item.TYPE}
              available={item.available}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PictureContainer: {
    height: scale.scaleHeight(536),
    width: scale.scaleWidth(376),
    overflow: 'hidden',
  },
  Picture: {
    height: scale.scaleHeight(536),
    width: scale.scaleWidth(376),
  },
  newContainer: {
    height: scale.scaleHeight(80),
    width: scale.scaleWidth(377),
  },
  titleContainer: {
    height: scale.scaleHeight(54),
    flexDirection: 'row',
  },
});
