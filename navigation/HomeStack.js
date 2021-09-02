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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


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



function SimplifiedRoot() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}


      <Stack.Screen name="Simplified" component={Simplified}
        options={{
          headerShown: false,
          title: 'NewsSimplified',
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
      <Drawer.Screen name="Home" component={HomeScreen}
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
      <Drawer.Screen name="NewSimplified" component={SimplifiedRoot}

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

    </Drawer.Navigator>
  );
}


export default function HomeStack() {
  return (
    // <Stack.Navigator headerMode='none'>
    //   <Stack.Screen name='Home' component={HomeScreen} />
    // </Stack.Navigator>
    <NewsApp />
    // <SimplifiedRoot />
    // <DecodedRoot />
    // <Drawer.Navigator>
    //   <Drawer.Screen name='Home' component={HomeScreen} />
    // </Drawer.Navigator>
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

