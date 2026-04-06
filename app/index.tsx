import React, { useState } from 'react';
import { StatusBar, StyleSheet, TextInput, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//
export default function Index() {
  const [username, setUsername] = useState('');
  return (
    <SafeAreaProvider style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        //secureTextEntry
        keyboardType="numeric"
        autoCorrect={true}
        autoCapitalize="words"
      />
      <Text style={styles.text}>My name is {username}</Text>
    </SafeAreaProvider>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});
