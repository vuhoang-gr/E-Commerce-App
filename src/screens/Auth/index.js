import {
    BackHandler,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../../components/BackHeader'
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
import SCREENS from '../../constants/screens'

const AuthScreen = (props) => {
    const [status, setStatus] = useState('Sign up');
    const [backFromOther, setBackFromOther] = useState(false);
    const keyboardIsShown = useKeyboard();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (status !== 'Sign up') {
                if(backFromOther){
                    setBackFromOther(false);
                    return false;
                }
                setStatus('Sign up');
                return true;
            }
        })
        return backHandler.remove;
    }, [status, backFromOther])

    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <BackHeader
                options={{
                    headerBackground: CUSTOM_COLOR.background,
                    backAction: status === 'Login' ? () => setStatus('Sign up') : null,
                    hideLeftComponent: status === 'Sign up' ? true : false

                }} />
            <Text style={[textStyles.h1, styles.header]}>
                {status}
            </Text>

            {/* body */}
            {status === 'Login'
                ? <LoginScreen navigation={props.navigation} setState={()=>setBackFromOther(true)}/>
                : <SignupScreen onSignIn={() => setStatus('Login')} />}

            {/* footer */}
            {!keyboardIsShown ?
                <View style={styles.footer}>
                    <Text style={[textStyles.desItem, styles.footerText]}>
                        {`Or ${status === 'Login' ? 'login' : 'sign up'} with social account`}
                    </Text>
                    <View style={styles.socialButtonContainer}>
                        <SocialButton />
                        <SocialButton type='fb' />
                    </View>
                </View> : null}
        </SafeAreaView>
    )
}

export default AuthScreen

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
    footer: {
        height: scale.scaleHeight(120),
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    socialButtonContainer: {
        flexDirection: 'row',
        width: '55%',
        justifyContent: 'space-between',
        // backgroundColor: 'orange'
    },
    footerText: {
        marginBottom: scale.scaleHeight(12),
    }
})