import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {false? <TabNavigator/> :<AuthNavigator/>}
    </NavigationContainer>
  )
}

export default RootNavigator