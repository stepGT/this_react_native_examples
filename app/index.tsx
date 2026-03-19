import { Text, View, Image, ScrollView, Button } from 'react-native';
const logo = require('../assets/images/react-logo.png');
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Button color="red" onPress={(e) => console.log(e)} title="Press"></Button>
    </View>
  );
}
