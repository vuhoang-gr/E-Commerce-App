import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useState } from 'react'
import BackHeader from '../../components/BackHeader'
import { IC_Arrow, IC_Back } from '../../assets/icons'
import { CUSTOM_COLOR } from '../../constants/colors'
import { PADDING_HORIZONTAL } from '../../constants/size'
import textStyles from '../../constants/textStyles'
import scale from '../../constants/responsive'
import BigTextForm from '../../components/TextForm/BigTextForm'
import LongButton from '../../components/Button/LongButton'
import SocialButton from '../../components/Button/SocialButton'
import isValidEmail from './apis/isValidEmail'
import isValidName from './apis/isValidName'
import isValidPassword from './apis/isValidPassword'
import useKeyboard from '../../hooks/useKeyboard'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const ForgotScreen = (props) => {
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <BackHeader
                navigation = {props.navigation}
                options={{
                    headerBackground: CUSTOM_COLOR.background,
                }} />
            <Text style={[textStyles.h1, styles.header]}>
                Forgot password
            </Text>

            {/* body */}
            <View style={styles.body}>
                <Text style={[textStyles.desItem, styles.announce]}>
                    {`Please, enter your email address. You will receive\na link to create a new password via email`}
                </Text>
                <BigTextForm
                    label='Email'
                    Condition={isValidEmail}
                    errorMsg='Not a valid email address. Should be your@email.com'
                    shadow={true}
                    style={styles.textForm}
                    handleChange={(txt)=>setEmail(txt)}
                />
                <LongButton
                    content='SEND'
                    isActive={isValidEmail(email)}
                />
            </View>


        </SafeAreaView>
    )
}

export default ForgotScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.background,
    },
    header: {
        marginTop: scale.scaleHeight(18),
        marginBottom: scale.scaleHeight(73),
        marginLeft: PADDING_HORIZONTAL,
    },
    body: {
        paddingHorizontal: PADDING_HORIZONTAL,
        flex: 1,
        // backgroundColor: 'pink',
    },
    announce: {
        marginBottom: scale.scaleHeight(16)
    },
    textForm: {
        marginBottom: scale.scaleHeight(55),
    }
})