import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,TextInput, StatusBar,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import * as firebase from "firebase";
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fontisto,Entypo,FontAwesome5,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';


export default function Close_location({navigation}) {
  

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
            
            
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("cabinet")}>
               <MaterialCommunityIcons name="file-cabinet" size={40} color="black" /> 
               <Text style={styles.text}>Cabinet Medical   </Text>

               </TouchableOpacity>

               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Clinique")}>
               <FontAwesome5 name="hospital-alt" size={40} color="black" />
               <Text style={styles.text}>Clinique </Text>
               </TouchableOpacity>
        
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Hopital")}>
               <FontAwesome5 name="hospital" size={40} color="black" />
               <Text style={styles.text}>Hopitale </Text>
               </TouchableOpacity>
        
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Laboratoire")}>
               <Entypo name="lab-flask" size={40} color="black" />
               <Text style={styles.text}>Laboratoire  </Text>
               </TouchableOpacity>

        
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pharmacie")}>
               <FontAwesome5 name="pills" size={40} color="black" />
               <Text style={styles.text}>Pharmacie </Text>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ServicesUrgences")}>
               <FontAwesome name="stethoscope" size={40} color="black" />
               <Text style={styles.text}>Services d'Urgences </Text>
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
  width:320,
  height:90,
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