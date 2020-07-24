import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,TouchableWithoutFeedback,Keyboard,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@firebase/app';
import Expo from "expo";
import Logo from '../components/Logo';

import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBndcmbo7D5MjeAnQM-c9TrwU-U-0SnxU4",
  authDomain: "gamezone1-4b851.firebaseapp.com",
  databaseURL: "https://gamezone1-4b851.firebaseio.com",
  projectId: "gamezone1-4b851",
  storageBucket: "gamezone1-4b851.appspot.com",
  messagingSenderId: "33736263881",
  appId: "1:33736263881:web:0a4b99730c81d8bf3ae518",
  measurementId: "G-S6WTT7GZ8G"
};
// Initialize Firebase
if(! firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}

export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Profil')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (

      <TouchableWithoutFeedback
      onPress={() =>
      {Keyboard.dismiss();
        }
      }
      >

      <View style={styles.container}>  
      <Logo />

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />     
         
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});