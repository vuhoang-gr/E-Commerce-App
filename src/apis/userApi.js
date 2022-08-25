import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import APIUtils from '../ultils/apiUtils';

const userApi = {
    emailLogin: async (email, password) => {
        var check = true;
        await auth().signInWithEmailAndPassword(email, password)
            .catch(e => {console.log(e); check = false})
        return check;
    },
    emailRegister: async (email, password, name) => {
        await auth().createUserWithEmailAndPassword(email, password)
            .catch(e => console.log(e))
        await auth().currentUser.updateProfile({
            displayName: name,
        })
        await userApi.put('notification', {
            sale: false,
            arrival: false,
            delivery: false,
        })
    },
    fbLogin: async () => {
        LoginManager.logOut();
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            //handle cancell
            console.log('User cancelled the login process');
            return;
        }
        // get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            //hanle access token denied
            console.log('obtaining access token failed');
            return;
        }
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        const response = await auth().signInWithCredential(facebookCredential)
            .catch(err => console.log(e))
        if (response.additionalUserInfo.isNewUser) {
            await userApi.put('notification', {
                sale: false,
                arrival: false,
                delivery: false,
            })
        }
    },
    googleLogin: async () => {
        GoogleSignin.signOut();
        const signIn = await GoogleSignin.signIn()
            .catch(e => {
                //handle err;
                console.log('User cancelled the login process');
            });
        if (!signIn) {
            //handle err
            return;
        }
        const { idToken } = signIn;
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        const response = await auth().signInWithCredential(googleCredential)
            .catch(e => console.log(e));
        if (response.additionalUserInfo.isNewUser) {
            await userApi.put('notification', {
                sale: false,
                arrival: false,
                delivery: false,
            })
        }
    },
    signOut: async () => {
        await auth().signOut()
            .catch(e => console.log(e))
        await AsyncStorage.removeItem('ACCESS_TOKEN')
            .catch(e => console.log('remove token storage err', e));
    },
    sendPwReset: async (email) => {
        var check = true;
        await auth().sendPasswordResetEmail(email)
            .catch(e => {
                console.log('send password request failed',e);
                check = false;
            })
        return check;
    },
    getInfor: async () => {
        const currentUser = auth().currentUser;
        if (!currentUser)
            return null;

        const getDob = async () => {
            return await APIUtils.get(`users/${currentUser.uid}/infor/dob`)
                .catch(e => console.log(`get dob: ${currentUser.email} failed`, e))
        };
        const getNoti = async () => {
            return await userApi.get('notification');
        }

        const [notiGet, dobGet] = await Promise.all([getNoti(), getDob()])
        .catch(e => console.log('get info err', e));

        return ({
            id: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
            photo: currentUser.photoURL,
            phone: currentUser.phoneNumber,
            dob: dobGet,
            notification: {...notiGet},
        })
    },
    get: async (path, filter, header) => {
        const currentUser = auth().currentUser;
        const response = await APIUtils.get(`users/${currentUser.uid}${path ? '/' + path : ''}`, filter, header)
            .catch(e => console.log(`get user: ${currentUser.email} failed`, e))
        return response;
    },
    put: async (path, data, header) => {
        const currentUser = auth().currentUser;
        const response = await APIUtils.put(`users/${currentUser.uid}${path ? '/' + path : ''}`, data, header)
            .catch(e => console.log(`put user: ${currentUser.email} failed`, e))
        return response;
    },
    delete: async (path, body, header) => {
        const currentUser = auth().currentUser;
        const response = await APIUtils.delete(`users/${currentUser.uid}${path ? '/' + path : ''}`, body, header)
            .catch(e => console.log(`delete user: ${currentUser.email} failed`, e))
        return response;
    },
    patch: async (path, data, header) => {
        const currentUser = auth().currentUser;
        const response = await APIUtils.patch(`users/${currentUser.uid}${path ? '/' + path : ''}`, data, header)
            .catch(e => console.log(`patch user: ${currentUser.email} failed`, e))
        return response;
    },
}

export default userApi;