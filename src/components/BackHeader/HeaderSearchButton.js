import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { IC_Find } from '../../assets/icons'
import { CUSTOM_COLOR } from '../../constants/colors'

const HeaderSearchButton = (props) => {
    return (
        <>
            {!props.status ?
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={props.onSearch}>
                    <IC_Find />
                </TouchableOpacity>
                :
                <SearchBar
                    onChangeText={props.onChangeText}
                    autoFocus={true}
                    options={{
                        shadow: false,
                        icon: null,
                    }}
                    style={{backgroundColor: props.color}} />}
        </>

    )
}

export default HeaderSearchButton