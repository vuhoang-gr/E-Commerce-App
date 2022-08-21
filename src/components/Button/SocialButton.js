import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import scale from '../../constants/responsive'
import { CUSTOM_COLOR } from '../../constants/colors'
import { Shadow } from '../../constants/customStyles'
import { IC_Facebook, IC_Google } from '../../assets/icons'
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import userApi from '../../apis/userApi'

GoogleSignin.configure({
    webClientId: '50480886661-h1obu26ife63eosaecoe7p9flo9vf1fh.apps.googleusercontent.com',
});

const SocialButton = (props) => {
    const { type } = props;
    const onFbHandle = userApi.fbLogin;
    const onGoogleHandle = userApi.googleLogin;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={type === 'fb' ? onFbHandle : onGoogleHandle}>
            {type === 'fb' ? <IC_Facebook /> : <IC_Google />}
        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    container: {
        ...Shadow,
        borderRadius: scale.scaleWidth(24),
        width: scale.scaleWidth(92),
        height: scale.scaleHeight(64),
        backgroundColor: CUSTOM_COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
})