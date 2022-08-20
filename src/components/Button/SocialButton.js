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

GoogleSignin.configure({
    webClientId: '50480886661-h1obu26ife63eosaecoe7p9flo9vf1fh.apps.googleusercontent.com',
});

const SocialButton = (props) => {
    const { type } = props;
    const onFbHandle = async () => {
        LoginManager.logOut();
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw 'Something went wrong obtaining access token';
        }
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        await auth().signInWithCredential(facebookCredential)
            .catch(err => console.log(e))
    }

    
    const onGoogleHandle = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential)
            .catch(e => console.log(e));
    }

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