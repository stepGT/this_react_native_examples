import { View, Text, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <View style={[style.box, style.lightblueBG]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[style.box, style.lightgreenBG]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBG: {
    backgroundColor: 'lightblue',
  },
  lightgreenBG: {
    backgroundColor: 'lightgreen',
  },
});
