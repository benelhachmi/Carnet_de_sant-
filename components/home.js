import React, { useState } from 'react';
import { StyleSheet,Button, Text, View,Image, StatusBar,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import * as firebase from "firebase";
import RNRestart from 'react-native-restart';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SimpleLineIcons,Entypo,AntDesign,FontAwesome5,FontAwesome } from '@expo/vector-icons';
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
           <AntDesign name="profile" size={40} color="black" />
               <Text style={styles.text}>My Profile </Text>

               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Carnet_medical")}}>
               <Icon name="file-document-box-multiple-outline" color={"black"} size={40}  /> 
               <Text style={styles.text}>Medical Notebook </Text>

               </TouchableOpacity>

               
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("ajout_nouveau")}}>
               <Icon name="account-multiple-plus-outline" color={"black"} size={40}  />
               <Text style={styles.text}>Add Other Members </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("location")}}>
               <Entypo name="location" size={40} color="black" />
                              <Text style={styles.text}>location</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("Add_An_Appointment")}}>
               <Entypo name="plus" size={40} color="black" />
                              <Text style={styles.text}>Add An Appointment</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("see_your_appointement")}}>
               <Entypo name="eye" size={40} color="black" />
                              <Text style={styles.text}>see your appointment</Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("déconnecter")}}>
               <SimpleLineIcons name="logout" size={40} color="black" />
                              <Text style={styles.text}>LogOUt </Text>
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