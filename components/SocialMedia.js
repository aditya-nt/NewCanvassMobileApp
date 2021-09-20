
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class SocialMedia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>
                    Follow us on
                </Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flexDirection: 'column' }}>
                            <SocialIcon
                                type="instagram"
                                style={styles.iconn}
                                iconSize={20}

                                onPress={() => {
                                    Linking.openURL('https://www.instagram.com/newscanvass/?hl=en')

                                }}
                            />
                            {/* <Text style={{ textAlign: 'center' }}>instagram</Text> */}
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <SocialIcon
                                type="facebook"
                                style={styles.iconn}
                                iconSize={20}

                                onPress={() => {
                                    Linking.openURL('https://m.facebook.com/644163459125076/')


                                }}
                            />
                            {/* <Text style={{ textAlign: 'center' }}>facebook</Text> */}
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <SocialIcon
                                // light
                                style={styles.tele}
                                iconType='font-awesome'
                                iconColor='#0088cc'
                                // raised={false}
                                iconSize={35}
                                type="telegram"
                                onPress={() => {
                                    Linking.openURL('https://t.me/currentaffairsnc2021')

                                }}
                            />
                            {/* <Text style={{ textAlign: 'center' }}>pinterest</Text> */}
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <SocialIcon
                                type="youtube"
                                style={styles.iconn}
                                iconSize={20}

                                onPress={() => {
                                    Linking.openURL('https://youtube.com/channel/UCB8pE3XEnqcCvfvwI1qf9RQ')

                                }}
                            />
                            {/* <Text style={{ textAlign: 'center' }}>linkedin</Text> */}
                        </View>


                    </View>

                </View>
                <Text style={{ fontSize: 11, textAlign: 'center', marginTop: 45, fontWeight: 'bold', color: 'gray' }}>
                    @ 2021 Newscanvass v2.0.0
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // bottom: 0,
        // height: 20,
        // backgroundColor: "red",
        // width: 200,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    tele: {
        // height :
        height: 35,
        width: 35
    },
    iconn: {
        height: 35,
        width: 35
    }
});