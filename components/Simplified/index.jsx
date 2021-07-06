import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDecodedTask } from '../../../slices';




export default Decoded = () => {
    const dispatch = useDispatch()


    const data = useSelector(state => state.decoded.task)
    const isLoading = useSelector(state => state.decoded.loading)


    const Item = (props) => (


        <Card style={styles.item}>
            <Card.Cover source={{ uri: `${props.imgUrl}` }} />

            <Card.Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.imgUrl}</Paragraph>
            </Card.Content>

        </Card>
    );


    useEffect(() => {
        dispatch(fetchDecodedTask({ limit: 1 }));
        return () => {

        }
    }, [])

    const renderItem = ({ item }) => <Item title={item.title} imgUrl={item.imageUrl} />;


    return (

        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>Loading...</Text> :
                (<FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                )}

            {/* <Button onPress={handleFetch} title="Open Nav" /> */}
        </View>
    );
};

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 19,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
});
