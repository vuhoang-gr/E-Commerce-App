import { StyleSheet} from 'react-native'
import React from 'react'
import Display from './temp/Display'
import AuthProvider from './routes/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <Display />
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})