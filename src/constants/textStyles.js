import { StyleSheet } from 'react-native'
import { CUSTOM_COLOR } from './colors'
import FONTS from './fonts'
import scale from './responsive'

const textStyles = StyleSheet.create({
    h1: {
        fontFamily: FONTS.Metropolis.Bold,
        fontSize: scale.scaleWidth(34),
        color: CUSTOM_COLOR.black,
    },
    h2: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(24),
        color: CUSTOM_COLOR.black,
    },
    h3: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(18),
        color: CUSTOM_COLOR.black,
    },
    subHead: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(16),
        color: CUSTOM_COLOR.black,
    },
    text: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(16),
        color: CUSTOM_COLOR.black,
    },
    desItem: {
        fontFamily: FONTS.Metropolis.Medium,
        fontSize: scale.scaleWidth(14),
        color: CUSTOM_COLOR.black,
    },
    desText: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(14),
        color: CUSTOM_COLOR.black,
    },
    helper: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(11),
        color: CUSTOM_COLOR.gray,
    },
})

export default textStyles
