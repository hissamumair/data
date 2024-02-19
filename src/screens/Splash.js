import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation=useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
navigation.navigate("Signup");
    },2000)
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Firbase ChatApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"purple",
    justifyContent:"center",
    alignItems:"center",
  },
  logo:{
    fontSize:35,
    color:"white",
    textAlign:"center",
  },
})