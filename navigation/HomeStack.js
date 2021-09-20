import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

import CustomSidebarMenu from '../components/CustomSIdebarMenu';
import { StyleSheet, View, Button } from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { SimplifiedStack } from './SimplifiedStack';
import TabScreen from '../components/Screens/TabScreen';
import { ClatStack } from './ClatStack';
import { SnippetStack } from './SnippetStack';
import { DecodedStack } from './DecodedStack';
import AboutUsScreen from '../components/Screens/AboutUsScreen';
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



function NewsApp() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        // activeTintColor: '#e91e63',
        // headerShown: true, activeTintColor: '#ff9800', backgroundColor: "#000",
        // itemStyle: { marginVertical: 14 },
      }}
      // drawerContentOptions={{
      //   activeTintColor: '#e91e63',
      //   itemStyle: { marginVertical: 5 },
      // }}
      drawerContent={(props) =>
        < CustomSidebarMenu {...props} />
      }
    >
      <Drawer.Screen name="Home" component={SnippetStack}
        options={{
          headerShown: false,

          title: 'Snippets',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#000',
          activeTintColor: "#000",
          backgroundColor: "#000",
          // drawerActiveBackgroundColor: "#000",
          drawerActiveTintColor: "#000",
          headerTitleStyle: {
            color: "#000",
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
          drawerActiveTintColor: "#000",

          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="NewDecoded" component={DecodedStack}

        options={{
          headerShown: false,

          title: 'NewsDecoded',
          headerStyle: {
            backgroundColor: '#111111',
          },
          drawerActiveTintColor: "#000",

          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="Clat" component={ClatStack}
        options={{
          headerShown: false,

          title: 'CLAT Section',
          headerStyle: {
            backgroundColor: '#000',
          },
          drawerActiveTintColor: "#000",

          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Drawer.Screen name="Contact" component={AboutUsScreen}
        options={{
          headerShown: true,

          title: 'About Us',
          headerStyle: {
            backgroundColor: '#000',
          },
          drawerActiveTintColor: "#000",

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

