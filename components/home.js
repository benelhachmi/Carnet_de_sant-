import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, StatusBar,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import * as firebase from "firebase";
import RNRestart from 'react-native-restart';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign,FontAwesome5,FontAwesome } from '@expo/vector-icons';


export default function Welcome({navigation}) {
  

  YellowBox.ignoreWarnings(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
    }
  };


    return(

        
        <View style={styles.container}>
          <StatusBar backgroundColor="#0b59a3" />
        
          <Text></Text>
           <ScrollView indicatorStyle='default'>
            
           <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Show_Profile")}}>
               <Icon name="file-document-box-multiple-outline" color={"black"} size={40}  /> 
               <Text style={styles.text}>My Profile </Text>

               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Carnet_medical")}}>
               <Icon name="file-document-box-multiple-outline" color={"black"} size={40}  /> 
               <Text style={styles.text}>Medical Notebook </Text>

               </TouchableOpacity>

               
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("FormMember")}}>
               <Icon name="account-multiple-plus-outline" color={"black"} size={40}  />
               <Text style={styles.text}>Add Other Members </Text>
               </TouchableOpacity>
        

        
               <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("MenuActe")}}>
               <Icon name="doctor" color={"black"} size={40}  /> 
               <Text style={styles.text}>Medical Record</Text>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.button}>
               <FontAwesome name="calendar" size={40} color="black" />
               <Text style={styles.text}>Make An Appointment </Text>
               </TouchableOpacity>
               
               
               <TouchableOpacity style={styles.button}>
               <AntDesign name="database" size={40} color="black" />
               <Text style={styles.text}>Sign Out</Text>
               </TouchableOpacity>
               
        
               </ScrollView>
        </View>
        
    );


}

const styles = StyleSheet.create({
container: {
   
    flex: 1, 
    
    backgroundColor: '#ebefff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    color:"#fff",
    fontSize:20,
    paddingLeft:40,

},
button:{
  width:380,
  height:110,
  backgroundColor:"#9daef2",
  borderRadius:10,
  marginVertical:5,
  paddingVertical:12,
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft:15,
},



})