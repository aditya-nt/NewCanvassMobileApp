import AppBar from '../../AppBar'
import React, { useEffect, useState, useRef } from 'react';

//import all the components we are going to use
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { clat_tabs, fetchCLATTabsTask } from '../../../slices/clat_tabs';
import { useDispatch, useSelector } from 'react-redux';
import { clat_sections, fetchCLATSectionsTask } from '../../../slices/clat_sections';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useSubsContext } from '../../../navigation/SubscriberContext';

const TabScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const { assignedTabs } = useSubsContext()
    const tabs = useSelector(state => state.clat_tabs.task)



    const myTabs = tabs && tabs.filter(tab => assignedTabs.includes(tab.TabName))

    let actionsTabs = bindActionCreators(clat_tabs.actions, dispatch)
    let actionsSections = bindActionCreators(clat_sections.actions, dispatch)


    const translateX = useRef(new Animated.Value(Dimensions.get("window").height)).current
    useEffect(() => {
        Animated.timing(translateX, { toValue: 0, duration: 2000, useNativeDriver: false }).start();
    }, [tabs])





    const handleClickPost = (index) => {
        // actionsTabs.setSelectedPost(index)
        // actionsSections.setSelectedPost(index)
        // navigation.navigate('Sections')
        // console.log(index)
    }

    const ItemView = ({ item }) => {

        return (
            // Single Comes here which will be repeatative for the FlatListItems
            <Animated.View style={{ transform: [{ translateY: translateX }] }} >
                <Text style={styles.item} onPress={() => getItem(item)}>
                    {item.TabName}
                </Text>
            </Animated.View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            //Item Separator
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
            />
        );
    };

    const getItem = (item) => {
        //Function for click on an item
        actionsTabs.setSelectedPost(item.TabName)
        actionsSections.clearSelected()
        actionsSections.setSelectedPost(item.Section)
        navigation.navigate('Sections')
        // alert('Tab : ' + item.TabName + ' Sec : ' + item.Section);
    };


    useEffect(() => {
        dispatch(fetchCLATTabsTask({ limit: 1 }));
        dispatch(fetchCLATSectionsTask({ limit: 1 }));
        return () => {

        }
    }, [])


    return (
        <>
            <AppBar title="CLAT Section" subtitle="NewsCanvass App" navigation={navigation} />

            <View style={styles.container}>

                {/* {
                   
                } */}

                <FlatList
                    data={myTabs}
                    //data defined in constructor
                    ItemSeparatorComponent={ItemSeparatorView}
                    //Item Separator View
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.container}>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        // backgroundColor: 'red'

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default TabScreen;
