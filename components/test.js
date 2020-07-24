import React, { useState } from 'react';
import { StyleSheet, Picker,Text, View, Image,Button,TextInput,Alert,Keyboard,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Logo from "../components/logo";
import { useSafeArea } from 'react-native-safe-area-context';
import * as firebase  from "firebase";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';



export default function MoreInfo({navigation}) {

  // const user = firebase.auth().currentUser;
  
    let result  =  null;
    const [rr,setrr] = useState();

    const [name,setname] = useState('');
    const [familyname,setfamilyname] = useState('');
    const [username,setusername] = useState('');
    const [Birthdate,setBirthdate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [erreurname,setErrorname] = useState("");
    const [erreurfamilyname,setErrorfamilyname] = useState("");
    const [erreurusername,setErrorusername] = useState("");



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


   const pressHandler = () => {
           navigation.navigate('Login');
   }
   const SignupUser = () =>{
          if(name.length == 0){
            setErrorname('Remplir Votre Nom');
            return;
          }
          if(familyname.length == 0){
            setErrorfamilyname('Remplir Votre Prénom');
            return;
          }
          if(username.length == 0){
            setErrorusername('Remplir Votre @Username');
            return;
          }
    
   

navigation.navigate('Signup',{
  name : name,
  familyname : familyname, 
  username : username,
  Birthdate : Birthdate.toISOString().slice(0,10),
  selectedValue : selectedValue,
  
   }
    
     
   )
   console.log(Birthdate);
  }

 

  const [selectedValue, setSelectedValue] = useState("Homme");
  var radio_props = [
    {label: 'Homme', value: 'homme' },
    {label: 'Femme', value: 'femme' }
  ];
    return (
        
       <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            
  
   
       }}>
       <View style={styles.container}>
         
         
    
       <Logo />
           <Text></Text>
         
         
          
           <TextInput style={styles.inputbox} 
            placeholderTextColor="white"
            placeholder="Nom" 
            value={name}
            editable={true}
            onChangeText={text => setname(text)}  

            />
            <Text style={styles.error}>{erreurname}</Text>

            <TextInput style={styles.inputbox}
            placeholderTextColor="white" 
            placeholder="Prénom"
            onChangeText={(value) => setfamilyname(value)}
            />
            <Text style={styles.error}>{erreurfamilyname}</Text>

            <TextInput style={styles.inputbox} 
            placeholderTextColor="white"
            placeholder="UserName" 
            onChangeText={(value) => setusername(value)}
            
            />
            <Text style={styles.error}>{erreurusername}</Text>
            <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 ,color:"white"}}
      onValueChange = {(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        
       <Picker.Item label="Homme" value="Homme" />
       <Picker.Item label="Femme" value="Femme" />
       </Picker>
     <TouchableOpacity  onPress={showDatepicker}>
               <Text>
                
                 <Text style={styles.text2}>Date de naissance </Text><MaterialCommunityIcons style={{justifyContent:'center',}} name="calendar-search" size={30} color="white" /></Text>
               
               </TouchableOpacity>      
   

        <View>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={Birthdate}
          mode="date"
          display="default"
          onChange={onChange}
        />
        
      )}
      </View>
      
      
                <Text></Text>
            
           
           <TouchableOpacity style={styles.button} onPress={SignupUser} >
               <Text style={styles.buttonText} >Continuer -></Text>
            </TouchableOpacity>
           <View style={styles.signupText}>
               <Text style={styles.text}>Vous avez déjà un compte? </Text>
               <TouchableOpacity onPress={pressHandler}>
               <Text style={styles.sign}>En Arrière.</Text>
               </TouchableOpacity>
               
            </View>
           </View>
          
        </TouchableWithoutFeedback>
  
        
       
    );
}

const styles = StyleSheet.create({
    container: {
      
      flex: 1,    
      backgroundColor: '#0b59a3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
   
    signupText:{
        flexGrow:1,
        alignItems:"flex-end",
        justifyContent:'center',
        marginVertical:16,
        flexDirection:"row",
    },
    sign:{
        color:"#82b9ed",
        fontSize:18,
        fontWeight:"bold",
    },
    text:{
        color:"#fff",
        fontSize:16,
    },
    text1:{
      color:"#fff",
      fontSize:25,
  },
  text2:{
    color:"#fff",
    fontSize:16,
},
    inputbox:{
        width:300,
        height:50,
        backgroundColor:'#5387b8',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:"#fff",
        marginVertical:10,
        
        
    },
    button:{
       width:300,
       height:50,
       backgroundColor:"#043059",
       borderRadius:25,
       marginVertical:10,
       paddingVertical:12,
    },
    buttonText:{
          fontSize:16,
          fontWeight:'500',
          color:'#fff',
          textAlign:'center',
    },
    error:{
      fontSize:15,
      color:'#f2f2f2',
      textAlign:'center',

    }
})