import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import React, { useState } from 'react'
import scale from '../../constants/responsive'
import { CUSTOM_COLOR } from '../../constants/colors'
import { Shadow } from '../../constants/customStyles'
import textStyles from '../../constants/textStyles'
import { IC_Check, IC_X } from '../../assets/icons'

const BigTextForm = (props) => {
    const [text, setText] = useState('');
    const { Condition } = props;

    const textCondition = (txt) => {
        if(!Condition){return true;}
        if(text.length > 0)
            return Condition(txt);
        return true;
    }
    const handleChange = (txt) => {
        setText(txt);
        if (props.handleChange) {
            props.handleChange(txt);
        }
    }
    const containerStyle = [
        styles.container,
        props.shadow ? Shadow : {},
        textCondition(text)
            ? {} : styles.wrong
    ];
    const wrapStyle = [
        !textCondition(text) ? styles.wrap : {},
        props.style,
    ];
    return (
        <View style={wrapStyle}>
            <View style={containerStyle}>
                <View style={styles.inputContainer}>
                    {text.length > 0 ?
                        <Text style={[
                            textStyles.helper, 
                            styles.label,
                            !textCondition(text) && {color:CUSTOM_COLOR.error}]}>
                            {props.label}
                        </Text> : null}
                    <TextInput
                        onChangeText={(txt) => handleChange(txt)}
                        style={[textStyles.desItem, text.length > 0 && styles.typing]}
                        placeholder={props.label}
                        secureTextEntry={props.secure ? true : false} />
                </View>
                {textCondition(text)
                    ? text.length > 0 && <IC_Check style={styles.rightCheck} /> 
                    : <IC_X style={styles.rightCheck} />}
            </View>
            {textCondition(text)
                    ? null : 
                    <Text style={[textStyles.helper, styles.error]}>
                        {props.errorMsg}
                    </Text>}
        </View>
    )
}

export default BigTextForm

const styles = StyleSheet.create({
    wrap: {
        // backgroundColor: 'orange',
        height: scale.scaleHeight(80),
        justifyContent: 'space-between',
    },
    container: {
        width: '100%',
        height: scale.scaleHeight(64),
        backgroundColor: CUSTOM_COLOR.white,
        borderRadius: scale.scaleWidth(4),
        paddingHorizontal: scale.scaleWidth(20),
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputContainer: {
        width: '100%',
        height: scale.scaleHeight(64),
        justifyContent: 'center',
        // backgroundColor: 'orange',
    },
    label: {
        position: 'absolute',
        top: scale.scaleHeight(12),
        left: scale.scaleWidth(5),
    },
    typing: {
        marginTop: scale.scaleHeight(15),
    },
    rightCheck: {
        position: 'absolute',
        right: scale.scaleWidth(20),
    },
    wrong: {
        borderColor: CUSTOM_COLOR.error,
        borderWidth: 0.8,
    },
    error: {
        marginLeft: scale.scaleWidth(25),
        color: CUSTOM_COLOR.error,
    }
})