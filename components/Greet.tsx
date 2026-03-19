import React from 'react';
import { View, Text } from 'react-native';

interface GreetProps {
  name: string;
}
/**
 *
 * @param {name}
 * @returns
 */
export default function Greet({ name }: GreetProps): React.JSX.Element {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
}
