import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useState } from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import { IC_Arrow, IC_Back } from '../../assets/icons'
import { CUSTOM_COLOR } from '../../constants/colors'
import { PADDING_HORIZONTAL } from '../../constants/size'
import textStyles from '../../constants/textStyles'
import scale from '../../constants/responsive'
import BigTextForm from '../../components/TextForm/BigTextForm'
import LongButton from '../../components/Button/LongButton'
import SocialButton from '../../components/Button/SocialButton'
import isValidEmail from './functions/isValidEmail'
import isValidName from './functions/isValidName'
import isValidPassword from './functions/isValidPassword'
import useKeyboard from '../../hooks/useKeyboard'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import userApi from '../../apis/userApi'
import CustomAlert from '../../components/Alert/CustomAlert'

const ForgotScreen = (props) => {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [isFail, setIsFail] = useState(false);
    const keyboardIsShown = useKeyboard();
    const sendEmailHandle = async () => {
        const response = await userApi.sendPwReset(email);
        if(keyboardIsShown) {
            Keyboard.dismiss();
        }
        setSent(true);
        if(!response)
            setIsFail(true);
        console.log('sent');
    }
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
                    onPress={sendEmailHandle}
                />
            </View>
            {sent
            ? <CustomAlert 
            title={!isFail ? 'Email has been sent' : 'Email not found'}
            content={`Please check your email and ${isFail ? 'request' : 'login'} again!`}
            buttonTitle={isFail ? 'OK' : 'Back to Login'}
            onSubmit={isFail ? () => {setSent(false);setIsFail(false)} : () => props.navigation.goBack()}/> 
            : null}

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