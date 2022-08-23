import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IC_Back, IC_Find, IC_X } from '../../assets/icons';
import { Shadow } from '../../constants/customStyles';
import { CUSTOM_COLOR } from '../../constants/colors';
import scale from '../../constants/responsive';
import { HEADER_HEIGHT, PADDING_HORIZONTAL } from '../../constants/size';
import textStyles from '../../constants/textStyles';
import HeaderSearchButton from './HeaderSearchButton';

const BackHeader = props => {
  //props
  const {
    title,
    navigation,
    options = {}
  } = props;
  const { hasShadow, hasBorder, onSearch } = options;

  //left route name (to navigate back)
  const leftRouteName = options.leftRouteName !== undefined ? options.leftRouteName : undefined;

  //Search handle
  const [searching, setSearching] = useState(false);

  //Right CPN with search or custom type
  //add props: options: {rightComponent: 'Search'} to use header with search
  const rightComponent = options.rightComponent === undefined
    ? null
    : options.rightComponent === 'Search'
      ? <HeaderSearchButton
        onChangeText={onSearch}
        onSearch={() => setSearching(true)}
        status={searching} 
        color={options.headerBackground}/>
      : options.rightComponent;

  //Container Style
  const containerStyle = [
    styles.container,
    hasShadow ? styles.shadow : {},
    hasBorder
      ? {
        borderBottomColor: CUSTOM_COLOR.white,
        borderBottomWidth: 1,
      }
      : {},
    options?.headerBackground
      ? { backgroundColor: options?.headerBackground }
      : {},
    options?.headerStyle ? options?.headerStyle : {},
  ];

  //Use for navigate back or cancel search
  const onLeftComponentPress = () => {
    if (searching) {
      setSearching(false);
    }
    else {
      options.backAction
        ? options.backAction()
        : leftRouteName
          ? navigation.navigate(leftRouteName)
          : navigation.goBack()
    }
  }

  return (
    <View style={containerStyle}>
      {options.hideLeftComponent && !searching ? <View />
        :
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onLeftComponentPress}
        >
          {searching ? <IC_X fill={CUSTOM_COLOR.black} /> : <IC_Back />}
        </TouchableOpacity>
      }
      {!searching ? <Text style={[textStyles.h3]}>{title}</Text> : null}
      {rightComponent ? rightComponent : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    backgroundColor: CUSTOM_COLOR.white,
  },
  shadow: {
    ...Shadow,
  },
});

export default BackHeader;
