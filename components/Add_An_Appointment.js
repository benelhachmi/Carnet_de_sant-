import React, { Component } from 'react';
import { StyleSheet, Text, View, TextField,TextInput, Button, Alert,TouchableWithoutFeedback,Keyboard,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';
import firebase from '../database/firebase';



export default class Add_An_Appointment extends Component {
  
  constructor() {
    super();
    this.state = { 
      date: '',
      location: '', 
      hour: '',
      doctor:'',
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
    if(this.state.date== '' && this.state.location === '' && this.state.hour === ''&& this.state.doctor ==='') {
      Alert.alert('Enter details to signup!')
    } 
    else {
      this.setState({
        isLoading: true,
      })
     const user =firebase.auth().currentUser;
     if(user != null){
       firebase.database().ref('Appointment/' +user.uid).set(
         {
            date : this.state.date,
            location : this.state.location,
            hour : this.state.hour,
            doctor:this.state.doctor,
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
     

        <TextInput
          style={styles.inputStyle}
          placeholder="date"
          value={this.state.date}
          onChangeText={(val) => this.updateInputVal(val, 'date')}
        />     
         
        <TextInput
          style={styles.inputStyle}
          placeholder="location"
          value={this.state.location}
          onChangeText={(val) => this.updateInputVal(val, 'location')}
        />
        
         <TextInput
          style={styles.inputStyle}
          placeholder="hour"
          value={this.state.hour}
          onChangeText={(val) => this.updateInputVal(val, 'hour')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="doctor          "
          value={this.state.doctor}
          
          onChangeText={(val) => this.updateInputVal(val, 'doctor')}
        />
       
       
        <Button
          color="#3740FE"
          title="Add"
          onPress={() => this.profilregister()}
        />

                                
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