import React,{Component , useState } from 'react';
import { StyleSheet,Button, Text, View,Image, StatusBar,ScrollView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import * as firebase from "firebase";
import RNRestart from 'react-native-restart';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Header from './Header';
import { Entypo,AntDesign } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class see_your_appointement extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        date: '',
        location: '', 
        hour: '',
        doctor:'',
        isLoading: false
    }
  }
  componentDidMount(){}
  render() {
    const user =firebase.auth().currentUser;

    this.state = { 
        date:firebase.database().ref('Appointment').once('value',(data)=>{
          console.log(data.toJSON());
        }),
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      
    }    
    


    return(

        
        <View style={styles.container}>
          <StatusBar backgroundColor="#0b59a3" />
                <Text></Text>

          <Text style={styles.texxtt}>
            Hello, {this.state.displayName}
          </Text>
           
          <Text style={styles.texxtt}>
            Hello, {this.state.date}
          </Text>

              
              
        
            
        </View>
        
    );


}
}
const styles = StyleSheet.create({
container: {
   
    flex: 1, 
    
    backgroundColor: '#ebefff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  texxtt:{
    fontSize:20,
    paddingLeft:230,
    width:380,
  height:110,
textAlign:'center',
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