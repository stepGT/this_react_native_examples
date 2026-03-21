import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Box({ children, style }: BoxProps) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
    width: 50,
    height: 50
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
