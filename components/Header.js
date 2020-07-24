import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({navigation,title}){

    return(
       
       
        <View style = {styles.header}> 
        <TouchableOpacity style={{position:'absolute',left:10}} onPress={() => {navigation.toggleDrawer()}} >
         <Icon name="menu" color={"black"} size={40} />  
         </TouchableOpacity>       
            <Text style={styles.title}>{title}</Text>
        </View>
    );


}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height : 70,
        backgroundColor:'#0b59a3',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    }
})