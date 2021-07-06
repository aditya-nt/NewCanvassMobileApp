import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { StoreProvider } from "./store";

import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './components/Screens/HomeScreen';
import Decoded from './components/Screens/Decoded';
import Simplified from './components/Screens/Simplified';




function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Nav" />
    </View>
  );
}
function CustomDrawerContent({ navigation }) {
  return (
    <>

      <Button
        title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          // navigation.navigate('hh');
          alert('HI')
        }}
      />
    </>
  );
}


export default function App() {

  return (

    <Provider store={store} >
      <NavigationContainer style={styles.container} //onStateChange={(state) => console.log('New state is', state)}
      >


        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} overlayColor="transparent" drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}>

          <Drawer.Screen name="Simplified" component={Simplified} />
          <Drawer.Screen name="Decoded" component={Decoded} />
          <Drawer.Screen name="Home" component={HomeScreen} />


        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );

}

const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
