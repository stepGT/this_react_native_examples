import { View, StatusBar, ActivityIndicator } from 'react-native';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <ActivityIndicator animating={true} color={'midnightblue'} size={'large'} />
    </View>
  );
}
