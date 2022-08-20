import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user: user,
            setUser: (txt) => setUser(txt),
            login: async (email, password) => {
                await auth().signInWithEmailAndPassword(email,password)
                .catch (e => console.log(e))
            },
            register: async (email, password) => {
                await auth().createUserWithEmailAndPassword(email,password)
                .catch (e => console.log(e))
            },
            logout: async (email, password) => {
                await auth().signOut()
                .catch (e => console.log(e))
            },
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider