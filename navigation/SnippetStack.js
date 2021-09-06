import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import NewsSimplifiedArticle from "../components/Screens/NewsSimplifiedArticle";

import Snippets from '../components/Screens/Snippets';


const Stack = createStackNavigator();


export function SnippetStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}


            <Stack.Screen name="Simplified" component={Snippets}
                options={{
                    headerShown: false,
                    title: 'Snippets',
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
                component={NewsSimplifiedArticle} options={{
                    headerShown: false,

                    title: 'NewsSimplified',
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

