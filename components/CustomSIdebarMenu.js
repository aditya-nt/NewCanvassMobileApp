// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import UserInfoItem from './components/UserInfoItem';

const CustomSidebarMenu = (props) => {
    const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/*Top Large Image */}
            {/* <Image
                source={{ uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png" }}
                style={styles.sideMenuProfileIcon} */}




            <Image
                style={styles.sideMenuProfileIcon}
                source={require('../assets/NClogo5.jpg')}
            />
            <UserInfoItem />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Visit Us"
                    onPress={() => Linking.openURL('https://aboutreact.com/')}
                />
                {/* <View style={styles.customItem}>
                    <Text
                        onPress={() => {
                            Linking.openURL('https://aboutreact.com/');
                        }}>
                        Rate Us
                    </Text>
                    <Image
                        source={{ uri: BASE_PATH + 'star_filled.png' }}
                        style={styles.iconStyle}
                    />
                </View> */}
            </DrawerContentScrollView>
            <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}
                onPress={() => {
                    Linking.openURL('https://www.newscanvass.com/');
                }}>

                www.newscanvass.com
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 280,
        height: 200,
        backgroundColor: '#000',
        alignSelf: 'center',
    },
    iconStyle: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
    },
    customItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'black',

    },
    sideHeader: {
        width: 250,
        height: 250,
        backgroundColor: '#111111',

    }
});

export default CustomSidebarMenu;
