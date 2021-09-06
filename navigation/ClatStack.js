import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from '../components/Screens/TabScreen';
import NewsDecodedArticle from '../components/Screens/NewsDecodedArticle';


const Stack = createStackNavigator();


export function ClatStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}


            <Stack.Screen name="Clattabs" component={TabScreen}
                options={{
                    headerShown: false,
                    title: 'CLAT Section',
                    headerStyle: {
                        backgroundColor: '#111111',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Sections"
                screenOptions={{ headerShown: true }}
                component={NewsDecodedArticle} options={{
                    title: 'Sections',
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

