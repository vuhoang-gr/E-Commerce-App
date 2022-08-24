import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { userSelect } from '../redux/selectors'
import { fetchUserData } from '../redux/thunks/userThunk'

const RootNavigator = () => {
  const user = useSelector(userSelect);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // console.log(ahihi);

  useEffect(() => {
    const unsubcriber = auth().onAuthStateChanged(async (user) => {
      if(isLoading) setIsLoading(false);
      if (!user) {
        //handle logout
        console.log('user is logged out')
      }
      await dispatch(fetchUserData());
      // console.log(user);
    });
    return unsubcriber;
  }, [])

  if(isLoading){
    return null;
    //splash screen here;
  }

  return (
    <NavigationContainer>
      {user.data ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default RootNavigator