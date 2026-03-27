import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return <View style={style.container}></View>;
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
