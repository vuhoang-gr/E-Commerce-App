import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import scale from '../../constants/responsive'
import { CUSTOM_COLOR } from '../../constants/colors'
import textStyles from '../../constants/textStyles'
import LongButton from '../../components/Button/LongButton'

const SentAlert = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.placeHolder]}/>
        <View opacity={1} style={styles.alertContainer} >
            <Text style={[textStyles.h3, styles.alertText]}>
                {`Email has been sent, please check your mail`}
            </Text>
            <LongButton 
            content='Back to login'
            onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
    </SafeAreaView>
  )
}

export default SentAlert

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
        height: '25%',
        opacity: 1,
        borderRadius: scale.scaleWidth(40),
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scale.scaleWidth(30)
    },
    alertText: {
        // textAlign: 'center'
    }
})