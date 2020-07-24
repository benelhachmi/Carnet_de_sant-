import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Profil from './components/profil';
import Home from './components/home';
import Carnet_medical from './components/Carnet_medical';

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