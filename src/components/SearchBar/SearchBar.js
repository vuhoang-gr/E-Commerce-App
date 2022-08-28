import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import scale from '../../constants/responsive'
import { CUSTOM_COLOR } from '../../constants/colors'
import { IC_Find } from '../../assets/icons'
import textStyles from '../../constants/textStyles'
import { Shadow } from '../../constants/customStyles'
import useKeyboard from '../../hooks/useKeyboard'

const SearchBar = (props) => {
    //props
    const {
        blurOutSide = false,
        options = {},
        autoFocus = false,
        onChangeText = undefined,
    } = props;

    //options props
    const {shadow = true} = options;
    const icon = options.icon !== undefined ? options.icon : <IC_Find fill={CUSTOM_COLOR.gray} />

    //handle blur
    const keyboardIsShown = useKeyboard();
    const onBlur = () => {
        Keyboard.dismiss();
    }
    return (
        <>
            {keyboardIsShown && blurOutSide ? <TouchableOpacity 
            style={styles.onBlur} 
            onPress={onBlur}/> : null}
            <View
                style={[styles.container, props.style, shadow && Shadow]}>
                {icon}
                <TextInput
                    placeholder='Search'
                    style={[textStyles.text, styles.textInput]}
                    onChangeText={onChangeText} 
                    autoFocus={autoFocus}/>
            </View>
        </>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: scale.scaleHeight(43),
        backgroundColor: CUSTOM_COLOR.white,
        borderRadius: scale.scaleWidth(23),
        overflow: 'hidden',
        alignItems: 'center',
        paddingHorizontal: scale.scaleWidth(15),
    },
    textInput: {
        flex: 1,
        paddingHorizontal: scale.scaleWidth(12),
    },
    onBlur: {
        position: 'absolute',
        width: scale.getCurrentWidth,
        height: scale.getCurrentHeight,
    }
})