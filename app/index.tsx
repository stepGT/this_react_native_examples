import { Text, View, ImageBackground } from 'react-native';
const logo = require('../assets/images/react-logo.png');
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Text>
        Edit app/index.tsx to <Text style={{ color: 'white' }}>edit this screen</Text>.
      </Text>
      <ImageBackground style={{ flex: 1 }} source={logo}>
        <Text>Text</Text>
      </ImageBackground>
    </View>
  );
}
