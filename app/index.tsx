import { View, StatusBar } from 'react-native';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="lightgreen" />
    </View>
  );
}
