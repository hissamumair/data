import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigation = useNavigation();

  // Logic for form submission, data processing, and error handling

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* <TextInput
        placeholder="Enter Name"
        style={[styles.input, {marginTop: 90}]}
        value={name}
        onChangeText={(txt) => setName(txt)}
      /> */}

      <TextInput
        placeholder="Enter Email"
        style={[styles.input, {marginTop: 20}]}
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />

      <TextInput
        placeholder="Enter Password"
        style={[styles.input, {marginTop: 20}]}
        value={password}
        onChangeText={(txt) => setPassword(txt)}
        secureTextEntry // Hide password characters
      />

      {/* <TextInput
        placeholder="Confirm Password"
        style={[styles.input, {marginTop: 20}]}
        value={confirmpassword}
        onChangeText={(txt) => setConfirmpassword(txt)}
        secureTextEntry // Hide password characters
      /> */}

      <TouchableOpacity style={styles.btn} onPress={() => {
        // Implement form submission logic here (validate inputs, process data, etc.)
        // If successful, navigate to the relevant screen.
        //navigation.navigate(' '); // Ensure correct screen name and navigation flow
      }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orLogin} onPress={() => {
        navigation.navigate('Signup'); // Replace with the correct screen name
      }}>
        Already dont have an account? Signup
      </Text>
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
    alignSelf:"center",
    alignItems:"center",
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
    fontWeight:"600",
    textDecorationLine:"underline",
    color:"black",
  },
});
