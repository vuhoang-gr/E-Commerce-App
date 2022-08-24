import { StyleSheet } from 'react-native'
import React from 'react'
// import Display from './temp/Display'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import RootNavigator from './routes/RootNavigator'

const App = () => {
  return (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})