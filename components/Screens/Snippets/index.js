

import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
// import logo from '../../../assets/NClogo4.png';

import LottieView from 'lottie-react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

import { fetchDecodedTask, fetchSimplifiedTask, setSelectedPost, simplified } from "../../../slices";
import AppBar from '../../AppBar';

class Exemple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: ['sss', 'ssss', 'eeee', 'egggg'],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0
        }
    }

    componentDidMount() {
        this.props.fetch()
    }

    renderCard = (card, index) => {
        return (
            <View style={styles.card}>
                <Image style={styles.sideMenuProfileIcon}
                    source={{ uri: `${card.imageUrl}` }}
                />
                <Text numberOfLines={2} style={styles.text}>{card.title} </Text>

            </View>

            // <Card style={styles.item} >
            //     <Card.Cover source={{ uri: `${card.imgUrl}` }} />

            //     <Card.Content>
            //         <Title style={styles.title}>{card.title}</Title>
            //         <Paragraph style={styles.paragraph}>Keep Reading ></Paragraph>
            //     </Card.Content>

            // </Card>
        )
    };

    onSwiped = (type) => {
        // console.log(`on swiped ${type}`)
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };

    tapped = (ind) => {
        this.props.setPost(ind)
        // console.log(this.props.tasksimplified[ind].title)
        this.props.navigation.navigate('Profile')
    };

    render() {
        // console.log("ffff", this.props.tasksimplified)
        const data = this.props.tasksimplified


        // console.log(data)
        return (<>
            <AppBar title="Snippets" subtitle="NewsCanvass App" navigation={this.props.navigation} />

            <View style={{ flex: 1, backgroundColor: '#000' }}>

                {/* <View > */}

                {/* 
                <LottieView source={require('../../../assets/7899-loading.json')} autoPlay loop />

            </View>
            <View style={styles.container}> */}

                {
                    !data && <LottieView source={require('../../../assets/7899-loading.json')} autoPlay loop />

                }
                {

                    // !data && <LottieView source={require('../../../assets/7899-loading.json')} autoPlay loop />
                    // ||
                    data &&

                    <Swiper backgroundColor="black"
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        onSwiped={() => this.onSwiped('general')}
                        onSwipedLeft={() => this.onSwiped('left')}
                        onSwipedRight={() => this.onSwiped('right')}
                        onSwipedTop={() => this.onSwiped('top')}
                        onSwipedBottom={() => this.onSwiped('bottom')}
                        onTapCard={(i) => this.tapped(i)}
                        // cards={this.state.cards}
                        cards={this.props.tasksimplified}
                        cardIndex={this.state.cardIndex}
                        cardVerticalMargin={80}
                        renderCard={this.renderCard}
                        onSwipedAll={this.onSwipedAllCards}
                        stackSize={3}
                        stackSeparation={15}
                        // overlayLabels={{
                        //     bottom: {
                        //         title: 'BLEAH',
                        //         style: {
                        //             label: {
                        //                 backgroundColor: 'black',
                        //                 borderColor: 'black',
                        //                 color: 'white',
                        //                 borderWidth: 1
                        //             },
                        //             wrapper: {
                        //                 flexDirection: 'column',
                        //                 alignItems: 'center',
                        //                 justifyContent: 'center'
                        //             }
                        //         }
                        //     },
                        //     left: {
                        //         title: 'NOPE',
                        //         style: {
                        //             label: {
                        //                 backgroundColor: 'black',
                        //                 borderColor: 'black',
                        //                 color: 'white',
                        //                 borderWidth: 1
                        //             },
                        //             wrapper: {
                        //                 flexDirection: 'column',
                        //                 alignItems: 'flex-end',
                        //                 justifyContent: 'flex-start',
                        //                 marginTop: 30,
                        //                 marginLeft: -30
                        //             }
                        //         }
                        //     },
                        //     right: {
                        //         title: 'LIKE',
                        //         style: {
                        //             label: {
                        //                 backgroundColor: 'black',
                        //                 borderColor: 'black',
                        //                 color: 'white',
                        //                 borderWidth: 1
                        //             },
                        //             wrapper: {
                        //                 flexDirection: 'column',
                        //                 alignItems: 'flex-start',
                        //                 justifyContent: 'flex-start',
                        //                 marginTop: 30,
                        //                 marginLeft: 30
                        //             }
                        //         }
                        //     },
                        //     top: {
                        //         title: 'SUPER LIKE',
                        //         style: {
                        //             label: {
                        //                 backgroundColor: 'black',
                        //                 borderColor: 'black',
                        //                 color: 'white',
                        //                 borderWidth: 1
                        //             },
                        //             wrapper: {
                        //                 flexDirection: 'column',
                        //                 alignItems: 'center',
                        //                 justifyContent: 'center'
                        //             }
                        //         }
                        //     }
                        // }}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                        swipeBackCard
                    >
                        {/* <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' /> */}
                    </Swiper>}

                <Text>   </Text>
                <Text>   </Text>
                <Text>   </Text>
                <Text>   </Text>
                <Text>   </Text>
                {/* </View> */}
            </View>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    tasksimplified: state.simplified.tasksimplified
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetch: () => dispatch(fetchSimplifiedTask({ limit: 1 })),

        setPost: (post) => dispatch(simplified.actions.setSelectedPost(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Exemple);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#111111'
        marginTop: 0
    },
    sideMenuProfileIcon: {
        marginVertical: 10,
        resizeMode: 'cover',
        width: SCREEN_WIDTH - 60,
        height: SCREEN_HEIGHT - 300,
        // backgroundColor: '#000',
        alignSelf: 'center',
    },
    card: {
        // flex: 1,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
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
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
})

