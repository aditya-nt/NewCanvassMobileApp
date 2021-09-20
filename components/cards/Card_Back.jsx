import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'

export default function Card_Back(props) {

    const handlePress = () => {
        if (props.card.RedirectType === "Section") {
            // console.log("hiiiii")
            // props.onPress(props.card.RedirectTo)
        }
    }

    return (
        // <View style={styles.card} >
        <Card style={styles.card} onPress={handlePress}>



            <Text style={styles.text}>hhhhhhh</Text>


        </Card>


    )
}

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: 10,

    },
    text: {
        // fontStyle: 'bold',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: 10,
        fontSize: 20,
        backgroundColor: 'transparent',
        color: 'black'
    },
})
