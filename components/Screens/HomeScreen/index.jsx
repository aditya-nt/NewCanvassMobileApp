import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from '../../../slices';



export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch();

    let todo_list = useSelector((state) => state.todos.task);
    let loading = useSelector((state) => state.todos.loading);

    const handleFetch = () => {
        dispatch(fetchTask({ limit: 1 }));
    };

    console.log(todo_list)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Homee</Text>
            {/* <Button onPress={() => navigation.openDrawer()} title="Open Nav" /> */}
            <Button onPress={handleFetch} title="Open Nav" />
        </View>
    );
}