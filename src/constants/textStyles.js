import { StyleSheet } from 'react-native'
import { CUSTOM_COLORS } from './colors'
import FONTS from './fonts'
import scale from './responsive'

const textStyles = StyleSheet.create({
    h1: {
        fontFamily: FONTS.Metropolis.Bold,
        fontSize: scale.scaleWidth(34),
        color: CUSTOM_COLORS.black,
    },
    h2: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(24),
        color: CUSTOM_COLORS.black,
    },
    h3: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(18),
        color: CUSTOM_COLORS.black,
    },
    subHead: {
        fontFamily: FONTS.Metropolis.Semibold,
        fontSize: scale.scaleWidth(16),
        color: CUSTOM_COLORS.black,
    },
    text: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(16),
        color: CUSTOM_COLORS.black,
    },
    desItem: {
        fontFamily: FONTS.Metropolis.Medium,
        fontSize: scale.scaleWidth(14),
        color: CUSTOM_COLORS.black,
    },
    desText: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(14),
        color: CUSTOM_COLORS.black,
    },
    helper: {
        fontFamily: FONTS.Metropolis.Regular,
        fontSize: scale.scaleWidth(11),
        color: CUSTOM_COLORS.gray,
    },
})

export default textStyles
