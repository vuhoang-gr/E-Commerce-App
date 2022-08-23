import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { userSelect } from '../../redux/selectors'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../components/BackHeader/BackHeader'
import SearchBar from '../../components/SearchBar/SearchBar'
import { CUSTOM_COLOR } from '../../constants/colors'
import { PADDING_HORIZONTAL } from '../../constants/size'
import textStyles from '../../constants/textStyles'
import scale from '../../constants/responsive'
import CategoryButton from './Components/CategoryButton'
import SCREENS from '../../constants/screens'

const ProfileScreen = (props) => {
    const userSL = useSelector(userSelect);
    const user = userSL.data;
    

    const onSetting = () => {
        props.navigation.navigate(SCREENS.SETTING);
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <BackHeader
                navigation={props.navigation}
                options={{
                    hideLeftComponent: true,
                    headerBackground: CUSTOM_COLOR.background,
                    rightComponent: 'Search'
                }} />
            <Text style={[textStyles.h1, styles.headerText]}>
                My profile
            </Text>
            {/* body */}

            <View style={[styles.body]}>
                {/* profile */}
                <View style={[styles.profile]}>
                    <View style={[styles.avatar]}>
                        <Image style={[styles.avatar]} source={{
                            uri: user.photo,
                        }} />
                    </View>
                    <View style={styles.profileContent}>
                        <Text style={[textStyles.h3]}>
                            {user.name}
                        </Text>
                        <Text style={[textStyles.desItem, styles.email]}>
                            {user.email}
                        </Text>
                    </View>
                </View>
                {/* Category list */}
                <ScrollView style={styles.listButtonContainer}>
                    <CategoryButton
                        title='My orders' />
                    <CategoryButton
                        title='Shipping address' />
                    <CategoryButton
                        title='Payment methods' />
                    <CategoryButton
                        title='Promocodes' />
                    <CategoryButton
                        title='My reviews' />
                    <CategoryButton
                        title='Settings'
                        announce='Notifications, password'
                        underline={false} 
                        onPress={onSetting}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.background,
        // padding: PADDING_HORIZONTAL
    },
    headerText: {
        marginTop: scale.scaleHeight(18),
        marginBottom: scale.scaleHeight(20),
        marginLeft: PADDING_HORIZONTAL,
    },
    body: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.background,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: scale.scaleHeight(5),
    },
    profile: {
        flexDirection: 'row',
        width: '100%',
        height: scale.scaleHeight(70),
        alignItems: 'center',
    },
    avatar: {
        width: scale.scaleWidth(64),
        height: scale.scaleWidth(64),
        borderRadius: scale.scaleWidth(32),
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    profileContent: {
        marginLeft: scale.scaleWidth(18),
        // backgroundColor: 'orange',
        width: '100%',
        height: '100%',
    },
    email: {
        color: CUSTOM_COLOR.gray,
    },
    listButtonContainer: {
        flex: 1,
        marginTop: scale.scaleHeight(28),
    }
})