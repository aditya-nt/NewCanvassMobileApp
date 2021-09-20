import { bindActionCreators } from "@reduxjs/toolkit";
import React, { Component, useEffect, useState } from "react";
import { ScrollView, useWindowDimensions, View, StyleSheet, Image, Text } from "react-native";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
// import HTML from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { clat_doc, clat_sections } from "../../../slices";

import Card_A from "../../cards/Card_A";
// import Card_Back from "../../cards/Card_Back";
// import AppBar from "../../AppBar";
// import logo from '../../../assets/adaptive-icon.png';
// import SwiperPost from "../SwiperPost";


export default function SectionScreen({ navigation }) {

    const dispatch = useDispatch()
    let actionsSections = bindActionCreators(clat_sections.actions, dispatch)
    let actionsLinks = bindActionCreators(clat_doc.actions, dispatch)


    const contentWidth = useWindowDimensions().width;

    const [loading, setloading] = useState(true)

    const selectedPostArr = useSelector(state => state.clat_sections.selectedPost)
    // const selectedPost = 0
    // console.log("3333", selectedPost.length)
    // console.log("ssss", selectedPostArr[selectedPostArr.length - 1])

    const len = selectedPostArr.length - 1
    const cc = len === 0

    const selectedPost = selectedPostArr[selectedPostArr.length - 1]
    const posts = useSelector(state => state.clat_sections.task)
    // console.log(posts)
    // console.log("yyyy", len)

    const post = posts.filter(item => item.id === selectedPost)
    // console.log("3333", post[0].data)

    const cards = post[0].data

    // console.log("4444", cards.length)

    // useEffect(() => {

    //     setloading(true)
    //     setTimeout(() => {
    //         setloading(false)
    //     }, 500);


    // }, [selectedPost])


    // const title = post.title

    const handleClick = (sectionName) => {
        actionsSections.setSelectedPost(sectionName)
        // console.log("object", sectionName)
    }

    const handleLink = (Link) => {

        actionsLinks.setSelectedLink(Link)

        navigation.navigate('Links')
    }

    const handleBack = (sectionName) => {
        actionsSections.popSelected()
        // console.log("object", sectionName)

    }

    return (<>
        {/* <AppBar title="CLAT Section" back="true" navigation={navigation} /> */}
        <ScrollView style={{ flex: 1, backgroundColor: '#111111', padding: '5%' }}>

            {
                cards.map((card, index) => {
                    return (

                        // <Text key={index} style={styles.blankText}>sss</Text>
                        <Card_A key={index} card={card} onPress={handleClick} handleLink={handleLink}></Card_A>
                        // <View style={styles.card}>

                        //     <Text style={styles.text}>bbbbb</Text>

                        // </View>
                    )




                })
            }
            {/* <Text style={styles.whiteText}>ddddfff</Text> */}
            <Text>     </Text>
            <Text>     </Text>

        </ScrollView>

        {

            !cc && <Button title="Learn More" style={{ backgroundColor: '#ff9800' }} onPress={handleBack}><Text style={{ color: 'white', height: 50 }} >  Go to previous section</Text></Button>

        }
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
    whiteText: {
        color: "white"
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
    card: {
        flex: 1,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',


    },
    text: {
        // fontStyle: 'bold',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: 10,
        fontSize: 20,
        backgroundColor: 'transparent'
    },
});
