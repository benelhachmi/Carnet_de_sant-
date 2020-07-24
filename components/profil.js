import React, { Component } from 'react';
import { StyleSheet, Text, View, TextField,TextInput, Button, Alert,TouchableWithoutFeedback,Keyboard,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';
import firebase from '../database/firebase';



export default class Profil extends Component {
  
  constructor() {
    super();
    this.state = { 
      First_name: '',
      Last_name: '', 
      date_of_birth: '',
      weight:'',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  profilregister = () => {
   //pour iviter les champs vide
    if(this.state.First_name== '' && this.state.Last_name === '' && this.state.date_of_birth === ''&& this.state.weight ===''&&this.state.Phone ==='') {
      Alert.alert('Enter details to signup!')
    } 
    else {
      this.setState({
        isLoading: true,
      })
     const user =firebase.auth().currentUser;
     if(user != null){
       firebase.database().ref('profils/' +user.uid).set(
         {
          First_name : this.state.First_name,
          Last_name : this.state.Last_name,
          date_of_birth : this.state.date_of_birth.toISOString().slice(0,10),
          weight:this.state.weight,
          Phone:this.state.Phone,
         })
     }  
       this.props.navigation.navigate('Home') 
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
          placeholder="First_name"
          value={this.state.First_name}
          onChangeText={(val) => this.updateInputVal(val, 'First_name')}
        />     
         
        <TextInput
          style={styles.inputStyle}
          placeholder="Last_name"
          value={this.state.Last_name}
          onChangeText={(val) => this.updateInputVal(val, 'Last_name')}
        />
        
         <TextInput
          style={styles.inputStyle}
          type="date"

          placeholder="date_of_birth"
          value={this.state.date_of_birth}
          onChangeText={(val) => this.updateInputVal(val, 'date_of_birth')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="weight          "
          value={this.state.weight}
          
          onChangeText={(val) => this.updateInputVal(val, 'weight')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone"
          value={this.state.Phone}
          onChangeText={(val) => this.updateInputVal(val, 'Phone')}
        />
       
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.profilregister()}
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