import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'; 
import auth from '@react-native-firebase/auth';

// Import firestore from '@react-native-firebase/firestore'


export default function Signup() {
  const navigation=useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const registerUsers = () => {
    // Implement your registration logic here
    // For example, you can make an API call to register the user
    console.log('Registering user:', { name, email, phoneno, password, confirmpassword });
  };
  useEffect(()=>{
getDatabase();
  },[]);
  const getDatabase=async()=>{
    try {
      const data=await firestore().collection('testing').doc('GcSAxkg9ZmGHP3H93qlJ').get();
    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        placeholder="Enter Name"
        style={[styles.input, { marginTop: 50 }]}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.input, { marginTop: 25 }]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Phone No"
        keyboardType={'number-pad'}
        style={[styles.input, { marginTop: 20 }]}
        value={phoneno}
        onChangeText={txt => setPhoneno(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.input, { marginTop: 20 }]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        placeholder="Enter Confirm Password"
        style={[styles.input, { marginTop: 20 }]}
        value={confirmpassword}
        onChangeText={txt => setConfirmpassword(txt)}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        registerUsers();
      }}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orLogin} onPress={()=>{
        navigation.navigate('Login')
      }}>Or Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 30,
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'purple',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: 'black',
  },
});
