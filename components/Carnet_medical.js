import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, StatusBar,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import * as firebase from "firebase";
import RNRestart from 'react-native-restart';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons,FontAwesome5,MaterialCommunityIcons,FontAwesome,Entypo } from '@expo/vector-icons';


export default function Carnet_medical({navigation}) {
  

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
           <ScrollView >
            
              
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Form_poid")}}>
               <FontAwesome5 name="weight" size={30} color="black" />
               <Text style={styles.text}>Weights and Medical Measures  </Text>
               </TouchableOpacity>

               
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("")}}>
               <FontAwesome name="tencent-weibo" size={30} color="black" />
               <Text style={styles.text}>Tension artérielle  </Text>
               </TouchableOpacity>
        

        
               <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("FormMedcin")}}>
               <MaterialCommunityIcons name="doctor" size={40} color="black" />
               <Text style={styles.text}>Médcins Précedents</Text>
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
    paddingLeft:20,

},
button:{
  width:380,
  height:70,
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