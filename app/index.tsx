import { View, Text, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <View style={[style.box, style.lightblueBG, style.boxShadow, style.androidShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[style.box, style.lightgreenBG, style.boxShadow, style.androidShadow]}>
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
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 20,
  },
  lightblueBG: {
    backgroundColor: 'lightblue',
  },
  lightgreenBG: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#eeeeee',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
