import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useContext, useState } from 'react'
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
import userApi from '../../apis/userApi'
import { useDispatch } from 'react-redux'
import { userAction } from '../../redux/slice/userSlice'

const SignupScreen = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const activeHanle = () => {
    if(isValidName(name) && isValidEmail(email) && isValidPassword(password)){
      return true;
    }
    return false;
  };

  const handleSignup = async () => {
    await userApi.emailRegister(email, password, name);
    dispatch(userAction.update({
      name: name,
    }))
  }

  return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.body}>
        {/* form text */}
        <BigTextForm
          label='Name'
          Condition={isValidName}
          errorMsg='Invalid name'
          style={styles.inputForm}
          shadow={true} 
          handleChange={(txt)=>setName(txt)}/>
        <BigTextForm
          label='Email'
          Condition={isValidEmail}
          errorMsg='Invalid email'
          style={styles.inputForm}
          shadow={true} 
          handleChange={(txt)=>{setEmail(txt)}}/>
        <BigTextForm
          label='Password'
          Condition={isValidPassword}
          secure={true}
          errorMsg='Invalid password'
          style={styles.inputForm}
          shadow={true} 
          handleChange={(txt)=>setPassword(txt)}/>

        {/* sign in navigate */}
        <TouchableOpacity
          style={styles.signInContainer}
          activeOpacity={0.6}
          onPress={props.onSignIn}>
          <Text style={[textStyles.desItem, styles.signInText]}>
            Already have an account?
          </Text>
          <IC_Arrow/>
        </TouchableOpacity>

        {/* sign up */}
        <LongButton
          content='SIGN UP'
          isActive={activeHanle()}
          style={styles.signUpButton} 
          onPress={handleSignup}/>
      </ScrollView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: PADDING_HORIZONTAL,
    flex: 1,
    // backgroundColor: 'pink',
  },
  inputForm: {
    marginBottom: scale.scaleHeight(8),
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: scale.scaleHeight(10),
  },
  signInText: {
    marginRight: scale.scaleWidth(5),
  },
  signUpButton: {
    marginTop: scale.scaleHeight(28),
  },
})