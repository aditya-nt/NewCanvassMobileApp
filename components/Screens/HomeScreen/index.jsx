import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from '../../../slices';
import AppBar from '../../AppBar';

import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) {


    // console.log(todo_list)

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <LottieView source={require('../../../assets/7899-loading.json')} autoPlay loop />

        </View>
    );
}