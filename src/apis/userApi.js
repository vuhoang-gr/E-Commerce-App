import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const userApi = {
  emailLogin: async (email, password) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
  },
  emailRegister: async (email, password, name) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
    await auth().currentUser.updateProfile({
      displayName: name,
    });
  },
  fbLogin: async () => {
    LoginManager.logOut();
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
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
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      .catch(err => console.log(e));
  },
  googleLogin: async () => {
    GoogleSignin.signOut();
    const signIn = await GoogleSignin.signIn().catch(e => {
      //handle err;
      console.log('User cancelled the login process');
    });
    if (!signIn) {
      //handle err
      return;
    }
    const {idToken} = signIn;
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .catch(e => console.log(e));
  },
  signOut: async () => {
    await auth()
      .signOut()
      .catch(e => console.log(e));
    await AsyncStorage.removeItem('ACCESS_TOKEN').catch(e =>
      console.log('remove token storage err', e),
    );
  },
  sendPwReset: async email => {
    await auth()
      .sendPasswordResetEmail(email)
      .catch(e => console.log(e));
  },
  get: async () => {
    const currentUser = auth().currentUser;
    // console.log('api', currentUser);
    if (!currentUser) return null;
    return {
      id: currentUser.uid,
      name: currentUser.displayName,
      email: currentUser.email,
      photo: currentUser.photoURL,
      phone: currentUser.phoneNumber,
    };
  },
};

export default userApi;
