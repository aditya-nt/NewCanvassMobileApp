import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import Decoded from '../components/Screens/Decoded';
import NewsDecodedArticle from '../components/Screens/NewsDecodedArticle';

const Stack = createStackNavigator();


export function DecodedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Decoded" component={Decoded}
                options={{
                    headerShown: false,
                    title: 'News Decoded',
                    headerStyle: {
                        backgroundColor: '#111111',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Profile"
                screenOptions={{ headerShown: true }}
                component={NewsDecodedArticle} options={{
                    title: 'NewsDecoded',
                    headerStyle: {
                        backgroundColor: '#111111',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        color: "#fff",
                    },
                }} />


        </Stack.Navigator>
    );
}
