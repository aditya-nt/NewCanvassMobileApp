import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decoded, fetchDecodedTask } from '../../../slices';
import AppBar from "../../AppBar";

import LottieView from 'lottie-react-native';



export default Decoded = ({ navigation }) => {
    const dispatch = useDispatch()

    const isFocused = useIsFocused()
    const data = useSelector(state => state.decoded.taskdecoded)
    const isLoading = useSelector(state => state.decoded.loading)

    let actions = bindActionCreators(decoded.actions, dispatch)


    const handleClickPost = (index) => {

        actions.setSelectedPost(index)

        navigation.navigate('Profile')
    }

    const Item = (props) => (


        <Card style={styles.item} onPress={() => handleClickPost(props.index)}>
            <Card.Cover source={{ uri: `${props.imgUrl}` }} />

            <Card.Content>
                <Title style={styles.title}>{props.title}</Title>
                <Paragraph style={styles.paragraph}>Read More...</Paragraph>
            </Card.Content>

        </Card>
    );


    // useEffect(() => {


    // }, [])



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(fetchDecodedTask({ limit: 1 }));

        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    const renderItem = ({ item }) => <Item title={item.title} imgUrl={item.imageUrl} index={item.index} />;


    return (

        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <AppBar title="NewsDecoded" subtitle="NewsCanvass App" navigation={navigation} />

            {/* <Text>Homee</Text> */}
            {/* <Button ronPress={() => navigation.openDrawer()} title="Open Nav" /> */}


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

        marginVertical: 10,
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
