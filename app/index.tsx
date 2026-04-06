import React, { useState } from 'react';
import { StatusBar, StyleSheet, TextInput, Text, Switch, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//
export default function Index() {
  const [username, setUsername] = useState('');
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);
  return (
    <SafeAreaProvider style={styles.container}>
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        //secureTextEntry
        keyboardType="numeric"
        autoCorrect={true}
        autoCapitalize="words"
      />
      <TextInput style={styles.input} placeholder="Enter your username" multiline />
      <Text style={styles.text}>My name is {username}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark mode</Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark((prev) => !prev)}
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor="#f4f3f4"
        />
      </View>
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
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
