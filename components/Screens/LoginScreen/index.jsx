import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
// import SocialButton from '../../components/SocialButton';
// import { AuthContext } from '../../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const { login, googleLogin } = useContext(AuthContext);
    // const { login } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image
                source={require('../../../assets/NClogo2.png')}
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

            <FormButton
                buttonTitle="Sign In"
                // onPress={() => login(email, password)}
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
};

export default LoginScreen;

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
