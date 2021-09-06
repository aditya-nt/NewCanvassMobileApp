import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Decoded from '../components/Screens/Decoded';
import NewsDecodedArticle from '../components/Screens/NewsDecodedArticle';
import CustomSidebarMenu from '../components/CustomSIdebarMenu';
import Simplified from '../components/Screens/Simplified';
import { StyleSheet, View, Button, Text } from 'react-native';
import NewsSimplifiedArticle from '../components/Screens/NewsSimplifiedArticle';
import Snippets from '../components/Screens/Snippets';
import Swiper from "../components/Screens/SwiperPost";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import SwiperPost from "../components/Screens/SwiperPost";
import { SimplifiedStack } from './SimplifiedStack';
import TabScreen from '../components/Screens/TabScreen';
import { ClatStack } from './ClatStack';
import { SnippetStack } from './SnippetStack';
function SettingsScreen({ navigation }) {
  // const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      {/* <Text>userParam: {JSON.stringify(user)}</Text> */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}




function DecodedRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Decoded" component={Decoded}
        options={{
          headerShown: false,
          title: 'NewsDecoded',
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




function NewsApp() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true, activeTintColor: '#ff9800',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) =>
        < CustomSidebarMenu {...props} />
      }
    >
      <Drawer.Screen name="Home" component={SnippetStack}
        options={{
          headerShown: true,

          title: 'Snippets',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="NewSimplified" component={SimplifiedStack}

        options={{
          headerShown: false,

          title: 'NewsSimplified',
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="NewDecoded" component={DecodedRoot}

        options={{
          headerShown: false,

          title: 'NewsDecoded',
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="Clat" component={ClatStack}
        options={{
          headerShown: true,

          title: 'CLAT Section',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
    </Drawer.Navigator>
  );
}


export default function HomeStack() {
  return (

    <NewsApp />

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

