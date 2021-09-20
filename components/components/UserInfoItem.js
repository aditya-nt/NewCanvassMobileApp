import { DrawerItem } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Firebase } from '../../config/firebase';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';
import { useSubsContext } from '../../navigation/SubscriberContext';

// import { IconButton } from '../Oldcomponents';
// import { Firebase } from '../config/firebase';
// import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';


const auth = Firebase.auth();


export default function UserInfoItem() {
    const { user } = useContext(AuthenticatedUserContext);

    const { subscriber, subscribed, planName } = useSubsContext()

    const styles2 = {
        dot: { width: 15, height: 15, backgroundColor: (subscribed) ? '#90ee90' : 'red', alignSelf: 'center', borderRadius: 8 }
    }
    // console.log("object", user)
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        // <View style={styles.container}>
        //     <StatusBar style='dark-content' />
        //     <View style={styles.row}>
        //         <Text style={styles.title}>Welcome {user.email}!</Text>
        //         <IconButton
        //             name='logout'
        //             size={24}
        //             color='#fff'
        //             onPress={handleSignOut}
        //         />
        //     </View>
        //     <Text style={styles.text}>Your UID is: {user.uid} </Text>
        // </View>

        // <DrawerItem
        //     label={user.email} marginBottom={10}
        // // label={user.email} activeBackgroundColor='#ff0000' activeTintColor='#2196f3' inactiveTintColor='rgba(0, 0, 0, .87)' inactiveBackgroundColor='transparent' style={{ backgroundColor: '#000000' }} labelStyle={{ color: '#ffffff' }}
        // // onPress={() => Linking.openURL('https://aboutreact.com/')}
        // >


        // </DrawerItem>
        <View style={styles.row}>
            <View style={styles2.dot}></View><Text style={styles.text}>  Hi, {user.displayName} </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e93b81',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: "#000",
        // height: 40
        paddingBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000'
    },
    text: {
        alignSelf: 'center',

        fontSize: 16,
        fontWeight: 'normal',
        color: '#da9621',
        backgroundColor: "#000",
        fontStyle: 'italic'
    },
    backrow: {

        backgroundColor: "#000",
        height: 40
    }
});
