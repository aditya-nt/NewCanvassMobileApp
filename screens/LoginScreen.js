import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

// import { Button, InputField, ErrorMessage } from '../Oldcomponents';
import { Firebase } from '../config/firebase';
import FormInput from '../components/components/FormInput';
import FormButton from '../components/components/FormButton';

const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    // <View style={styles.container}>
    //   <StatusBar style='dark-content' />
    //   <Text style={styles.title}>Login</Text>
    //   <InputField
    //     inputStyle={{
    //       fontSize: 14
    //     }}
    //     containerStyle={{
    //       backgroundColor: '#fff',
    //       marginBottom: 20
    //     }}
    //     leftIcon='email'
    //     placeholder='Enter email'
    //     autoCapitalize='none'
    //     keyboardType='email-address'
    //     textContentType='emailAddress'
    //     autoFocus={true}
    //     value={email}
    //     onChangeText={text => setEmail(text)}
    //   />
    //   <InputField
    //     inputStyle={{
    //       fontSize: 14
    //     }}
    //     containerStyle={{
    //       backgroundColor: '#fff',
    //       marginBottom: 20
    //     }}
    //     leftIcon='lock'
    //     placeholder='Enter password'
    //     autoCapitalize='none'
    //     autoCorrect={false}
    //     secureTextEntry={passwordVisibility}
    //     textContentType='password'
    //     rightIcon={rightIcon}
    //     value={password}
    //     onChangeText={text => setPassword(text)}
    //     handlePasswordVisibility={handlePasswordVisibility}
    //   />
    //   {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
    //   <Button
    //     onPress={onLogin}
    //     backgroundColor='#f57c00'
    //     title='Login'
    //     tileColor='#fff'
    //     titleSize={20}
    //     containerStyle={{
    //       marginBottom: 24
    //     }}
    //   />
    //   <RNButton
    //     onPress={() => navigation.navigate('Signup')}
    //     title='Go to Signup'
    //     color='#fff'
    //   />
    // </View>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>

      <Image
        source={require('../assets/NClogo2.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>   </Text>

      <Text style={styles.text}>Login</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}

      <FormButton
        buttonTitle="Sign In"
        onPress={onLogin}
        color="#de4d41"
        backgroundColor="#f5e7ea"
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          {/* <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
        /> */}
          {/* 
        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#ffffff"
            backgroundColor="#4185f4"
            onPress={() => googleLogin()}
        /> */}
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>
      <Text style={styles.text}>   </Text>


    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#111111",
  }, logo: {
    height: 100,
    width: 100,
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