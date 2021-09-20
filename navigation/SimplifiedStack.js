import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import NewsSimplifiedArticle from "../components/Screens/NewsSimplifiedArticle";
import Simplified from "../components/Screens/Simplified";


const Stack = createStackNavigator();


export function SimplifiedStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}


            <Stack.Screen name="Simplified" component={Simplified}
                options={{
                    headerShown: false,
                    title: 'News Simplified',
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

