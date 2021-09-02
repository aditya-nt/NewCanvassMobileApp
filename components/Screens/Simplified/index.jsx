import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSimplifiedTask } from '../../../slices';
import AppBar from "../../AppBar";
import { simplified } from "../../../slices";
import { useIsFocused } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default Simplified = ({ navigation }) => {
    const dispatch = useDispatch()

    const isFocused = useIsFocused()

    const data = useSelector(state => state.simplified.tasksimplified)
    const isLoading = useSelector(state => state.simplified.loading)

    let actions = bindActionCreators(simplified.actions, dispatch)


    const handleClickPost = (index) => {
        actions.setSelectedPost(index)
        navigation.navigate('Profile')
        // console.log(index)
    }

    const Item = (props) => (


        <Card style={styles.item} onPress={() => handleClickPost(props.index)}>
            <Card.Cover source={{ uri: `${props.imgUrl}` }} />

            <Card.Content>
                <Title style={styles.title}>{props.title}</Title>
                <Paragraph style={styles.paragraph}>Keep Reading ></Paragraph>
            </Card.Content>

        </Card>
    );


    // useEffect(() => {

    // }, [])


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action and update data
            dispatch(fetchSimplifiedTask({ limit: 1 }));

        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // console.log(data)
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    const renderItem = ({ item }) => <Item title={item.title} imgUrl={item.imageUrl} index={item.index} />;


    return (

        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <AppBar title="NewsSimplified" subtitle="NewsCanvass App" navigation={navigation} />

            {/* <Text>Homee</Text> */}
            {/* <Button onPress={() => navigation.openDrawer()} title="Open Nav" /> */}

            {isLoading || !useIsFocused ?
                <LottieView source={require('../../../assets/7899-loading.json')} autoPlay loop />

                :
                (<FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={{ margin: '5%' }}

                />
                )}

            {/* <Button onPress={handleFetch} title="Open Nav" /> */}
        </View>
    );
};

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#222222',
        marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 10,

        margin: 2,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        // padding: 20,
        margin: 2,
        color: '#ff9800',
    },
});
