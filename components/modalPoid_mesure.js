import React,{useState} from 'react';
import {StyleSheet,View,Text,Modal,FlatList,TouchableWithoutFeedback,Button, Keyboard} from 'react-native';
import { TextInput } from 'react-native-paper';
import { add } from 'react-native-reanimated';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function ModalPoid_mesure({}){


    



    const user = firebase.auth().currentUser;
    return(
      <ScrollView>
       <View style={styles.container}>
         
         
            {(props) => (
               
                <View>
                    <TextInput style={styles.input}
                    placeholder='Poids(KG)'
                    onChangeText={props.handleChange('poid')}
                    value={props.values.poid}
                    keyboardType='numeric'
                    placeholderTextColor="white"
                    onBlur={props.handleBlur('poid')}
                     />
                     <Text style={styles.error}>{props.touched.poid && props.errors.poid}</Text>
                         <TextInput style={styles.input}
                    placeholder='Temperature(°C)'
                    onChangeText={props.handleChange('temperature')}
                    value={props.values.temperature}
                    keyboardType='numeric'
                    placeholderTextColor="white"
                    onBlur={props.handleBlur('temperature')}
                     /><Text style={styles.error}>{props.touched.temperature && props.errors.temperature}</Text>
                         <TextInput style={styles.input}
                    placeholder='Taille(cm)'
                    onChangeText={props.handleChange('taille')}
                    value={props.values.taille}
                    keyboardType='numeric'
                    placeholderTextColor="white"
                    onBlur={props.handleBlur('taille')}
                     /><Text style={styles.error}>{props.touched.taille && props.errors.taille}</Text>
                        
                         <TextInput style={styles.input}
                    placeholder='Notes(optionnel)'
                    keyboardType='default'
                    multiline
                    onChangeText={props.handleChange('Notes')}
                    value={props.values.Notes}
                    placeholderTextColor="white"
                    onBlur={props.handleBlur('Notes')}
                     />
                     <Text style={styles.error}>{props.touched.Notes && props.errors.Notes}</Text>

      <Button color='blue' title="Valider" onPress={props.handleSubmit} /> 
                </View>
               
            )}

            
       </View>
</ScrollView>


    );
}

const styles = StyleSheet.create({

    container: {
       
     
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ebefff',
      },
      input:{
            width:300,
            height:50,
            backgroundColor:'#ebefff',   
            paddingHorizontal:16,
            fontSize:16,
            color:"#fff",
            marginVertical:10,

      },
      error:{
        fontSize:14,
        color:'red',
      }
      
    })
