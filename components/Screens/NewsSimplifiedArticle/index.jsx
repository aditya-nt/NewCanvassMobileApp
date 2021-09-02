import React, { Component, useEffect, useState } from "react";
import { ScrollView, useWindowDimensions, View, StyleSheet, Image, Text } from "react-native";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import HTML from "react-native-render-html";
import { useSelector } from "react-redux";
import AppBar from "../../AppBar";
import logo from '../../../assets/adaptive-icon.png';



export default function NewsSimplifiedArticle({ navigation }) {
    const contentWidth = useWindowDimensions().width;

    const [loading, setloading] = useState(true)

    const selectedPost = useSelector(state => state.simplified.selectedPost)
    // const selectedPost = 0


    const post = useSelector(state => state.simplified.tasksimplified[selectedPost])



    useEffect(() => {

        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 500);


    }, [selectedPost])


    const title = post.title

    return (<>
        {/* <AppBar title="NewsSimplified" subtitle={title} back="true" navigation={navigation} /> */}
        <ScrollView style={{ flex: 1, backgroundColor: '#111111', padding: '5%' }}>

            {
                !loading && <Card style={{ paddingHorizontal: 0, backgroundColor: 'black' }}>

                    <Title style={{ color: '#fff', fontSize: 22 }}>{post.title}</Title>

                </Card>}

            {



                (loading) ?
                    <Card style={styles.item}>
                        <Card.Cover source={logo} />
                    </Card>

                    :



                    <Card style={styles.item}>

                        <Card.Cover source={{ uri: `${post.imageUrl}` }} />
                    </Card>

            }


            <HTML source={{ html: `${post.desc}` }} contentWidth={contentWidth} />

            <Text >ddddd</Text>
            <Text >ddddd</Text>
            <Text >ddddd</Text>
            <Text >ddddd</Text>
            <Text >ddddd</Text>
        </ScrollView>
    </>
    );
}


const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 19,
    },
    blankText: {
        color: "black"
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
});
