import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {IMG_SuccessBackground} from '../../assets/images';
import CustomButton from '../../components/Button/CustomButton';
import scale from '../../constants/responsive';
import SCREENS from '../../constants/screens';
import textStyles from '../../constants/textStyles';

const SuccessScreen = props => {
  const {type} = props;
  //   if (type === 0)
  return (
    <ImageBackground
      source={IMG_SuccessBackground}
      style={{flex: 1, alignItems: 'center'}}>
      <Text style={[textStyles.h1, {marginTop: scale.scaleHeight(77)}]}>
        Success!
      </Text>
      <Text style={[textStyles.subHead, {marginTop: scale.scaleHeight(16)}]}>
        {'Your order will be delivered soon.\nThank you for choosing our app!'}
      </Text>
      <View
        style={{
          width: scale.scaleWidth(160),
          height: scale.scaleHeight(36),
          marginTop: scale.scaleHeight(16),
        }}>
        <CustomButton
          title={'Continue Shopping'}
          onPress={() =>
            props.navigation.navigate(SCREENS.HOME)
          }></CustomButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default SuccessScreen;
