import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import scale from '../../constants/responsive'
import { CUSTOM_COLOR } from '../../constants/colors'
import textStyles from '../../constants/textStyles'
import LongButton from '../Button/LongButton'
import { PADDING_HORIZONTAL } from '../../constants/size'

const CustomAlert = (props) => {
    const {
        title = 'Your title',
        content = 'Yourt content',
        buttonTitle = 'Button title',
        onSubmit = () => {},
    } = props
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.placeHolder]}/>
        <View opacity={1} style={styles.alertContainer} >
            <Text style={[textStyles.h3, {
                alignSelf: 'center'
            }]}>
                {title}
            </Text>
            <Text style={[textStyles.desText, styles.alertText]}>
                {content}
            </Text>
            <LongButton 
            content={buttonTitle}
            onPress={onSubmit}/>
        </View>
    </SafeAreaView>
  )
}

export default CustomAlert

const styles = StyleSheet.create({
    placeHolder: {
        opacity: 0.3,
        backgroundColor: CUSTOM_COLOR.black,
    },
    container: {
        position: 'absolute',
        width: scale.getCurrentWidth,
        height: scale.getCurrentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContainer: {
        backgroundColor: CUSTOM_COLOR.background,
        width: '80%',
        // height: '25%',
        opacity: 1,
        borderRadius: scale.scaleWidth(15),
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: PADDING_HORIZONTAL
    },
    alertText: {
        marginLeft: scale.scaleWidth(9),
        marginVertical: scale.scaleHeight(15),
        lineHeight: scale.scaleHeight(19)
    }
})