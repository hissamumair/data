import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import firestore from '@react-native-firebase/firestore';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name={'Splash'} component={Splash} options={{headerShown:false}}/>
<Stack.Screen name={'Signup'} component={Signup} options={{headerShown:false}}/>
<Stack.Screen name={'Login'} component={Login} options={{headerShown:false}}/>





</Stack.Navigator>
 </NavigationContainer>

    
  )
}

const styles = StyleSheet.create({})