import React, { Component, useEffect, useState } from "react";
import { ScrollView, useWindowDimensions, View, StyleSheet, Image, Text } from "react-native";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import HTML from "react-native-render-html";
import { useSelector } from "react-redux";
import AppBar from "../../AppBar";
import logo from '../../../assets/adaptive-icon.png';
import YoutubePlayer from "react-native-youtube-iframe";
import YouTubeTest from "../../Video";
import SwiperPostND from "../SwiperPostND";


export default function NewsDecodedArticle({ navigation }) {

    const contentWidth = useWindowDimensions().width;

    const [loading, setloading] = useState(true)

    const selectedPost = useSelector(state => state.decoded.selectedPost)
    const post = useSelector(state => state.decoded.taskdecoded[selectedPost])



    useEffect(() => {

        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 500);


    }, [selectedPost])



    const title = post.title
    // const arr = post.videoUrl.split('/')
    // const len = arr.length
    // const videoid = arr[len - 1]
    const videoid = post.videoId





    return (<>
        {/* <AppBar title="NewsDecoded" subtitle={title} back="true" navigation={navigation} /> */}
        <ScrollView style={{ flex: 1, backgroundColor: '#111111', padding: '5%' }}>



            <YouTubeTest videoid={videoid} />
            <Card.Content>
                <Title style={styles.title}>{post.title}</Title>
                {/* <Paragraph>Read More...</Paragraph> */}
            </Card.Content>




            <Text >     </Text>
            <Text >     </Text>
            <Text >     </Text>
            <Text >     </Text>
            <Text >      </Text>
            <Text >     </Text>
            <Text >     </Text>

            <View
                style={{
                    borderBottomColor: '#fff',
                    borderBottomWidth: 1,
                    margin: 10
                }}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111111', height: 300 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Related Posts</Text>

                <Text >    </Text>
                <Text >    </Text>

                <SwiperPostND />


            </View>


            {/* <HTML source={{ html: `${post.desc}` }} contentWidth={contentWidth} /> */}
        </ScrollView>
    </>
    );
}


const styles = StyleSheet.create({

    item: {
        backgroundColor: '#111',
        marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 19,
        color: '#999'

    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
});
