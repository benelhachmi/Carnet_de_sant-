import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Profil from './components/profil';
import Home from './components/home';
import Carnet_medical from './components/Carnet_medical';
import Show_Profile from './components/Show_Profile';
import déconnecter from './components/déconnecter';
import ajout_nouveau from './components/ajout_nouveau';
import Form_poid from './components/Form_poid';
import location from './components/location';
import Close_location from './components/Close_location';
import add_profile_photo from './components/add_profile_photo';
import  Add_An_Appointment from './components/Add_An_Appointment';
import  see_your_appointement from './components/see_your_appointement';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />     
       <Stack.Screen 
       name="Profil" 
       component={Profil} 
       options={
         { title: 'Profil' },
         {headerLeft: null} 
       }
      />  
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={
          {title: 'home'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Carnet_medical" 
        component={Carnet_medical} 
        options={
          {title: 'Carnet Medical'},
          {headerLeft: null} 
        }
      />
       <Stack.Screen 
        name="Show_Profile" 
        component={Show_Profile} 
        options={
          {title: 'Show_Profile '},
          {headerLeft: null} 
        }
      />
       <Stack.Screen 
       name="ajout_nouveau" 
       component={ajout_nouveau} 
       options={
         { title: 'Add Other Members' },
         {headerLeft: null} 
       }
      />  
       
       <Stack.Screen 
       name="location" 
       component={location} 
       options={
         { title: 'location' },
         {headerLeft: null} 
       }
      />
        
      <Stack.Screen 
        name="see_your_appointement" 
        component={see_your_appointement} 
        options={
          {title: 'see_your_appointement'},
          {headerLeft: null} 
        }
      />

             <Stack.Screen 
        name="Close_location" 
        component={Close_location} 
        options={
          {title: 'Close_location '},
          {headerLeft: null} 
        }
      />

<Stack.Screen 
        name="Add_An_Appointment" 
        component={Add_An_Appointment} 
        options={
          {title: 'Add_An_Appointment '},
          {headerLeft: null} 
        }
      />
<Stack.Screen 
        name="add_profile_photo" 
        component={add_profile_photo} 
        options={
          {title: 'add_profile_photo '},
          {headerLeft: null} 
        }
      />
        <Stack.Screen 
        name="déconnecter" 
        component={déconnecter} 
        options={
          {title: 'LogOut '},
          {headerLeft: null} 
        }
      />
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}