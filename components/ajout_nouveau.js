import React, { Component } from 'react';
import { StyleSheet, Text,Keyboard, View,ScrollView,TouchableWithoutFeedback, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';

import Logo from '../components/Logo';

export default class ajout_nouveau extends Component {
    constructor() {
        super();
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
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
      
      registerUser = () => {
        if(this.state.email === '' && this.state.password === ''&& this.state.First_name== '' && this.state.Last_name === '' && this.state.date_of_birth === ''&& this.state.weight ===''&&this.state.Phone ==='') {
          Alert.alert('Enter details !')
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
            const user =firebase.auth().currentUser;
            if(user != null){
              firebase.database().ref('profils/' +user.uid).set(
                {
                 First_name : this.state.First_name,
                 Last_name : this.state.Last_name,
                 date_of_birth : this.state.date_of_birth,
                 weight:this.state.weight,
                 Phone:this.state.Phone,
                })
            }  
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Home')
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
    
          <ScrollView indicatorStyle='default'>

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
              title="Add "
              onPress={() => this.registerUser()}
            />
    
    </ScrollView>

                     
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
