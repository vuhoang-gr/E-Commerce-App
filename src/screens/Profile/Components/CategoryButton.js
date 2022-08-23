import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import scale from '../../../constants/responsive'
import { CUSTOM_COLOR } from '../../../constants/colors'
import { PADDING_HORIZONTAL } from '../../../constants/size'
import { IC_Back } from '../../../assets/icons'
import textStyles from '../../../constants/textStyles'

const CategoryButton = (props) => {
    const {
        underline = true,
        onPress = null,
        title = 'Your title',
        announce = 'your announce'
    } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.container, props.style]}
            onPress={onPress}>
            <View style={styles.content}>
                <Text style={[textStyles.subHead]}>
                    {title}
                </Text>
                <Text style={[textStyles.helper, styles.announce]}>
                    {announce}
                </Text>
            </View>
            <IC_Back style={{ transform: [{ rotate: '180deg' }] }}
                fill={CUSTOM_COLOR.gray} />
            {underline && <View style={styles.line}/>}
        </TouchableOpacity>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scale.scaleHeight(72),
        // backgroundColor: CUSTOM_COLOR.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    announce: {
        marginTop: scale.scaleHeight(9),
    },
    line: {
        position: 'absolute',
        bottom: 0,
        height: 0.5,
        width: '100%',
        backgroundColor: CUSTOM_COLOR.gray,
        opacity: 0.2
    }
})