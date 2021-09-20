import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';



export default function SplashScreen({ navigation }) {


  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>

      <Image
        source={require('../assets/NClogo5.jpg')}
        style={styles.logo}
      />
      <Text style={styles.text}>   </Text>

      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>


    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#000",
  }, logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  text: {
    // fontFamily: 'Lato-Regular',
    fontSize: 28,
    marginBottom: 10,
    color: '#f89900',
  },
  btnText: {
    // fontFamily: 'Lato-Regular',
    // fontSize: 28,
    // marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: '#f89900',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f89900',
    // fontFamily: 'Lato-Regular',
  },
});