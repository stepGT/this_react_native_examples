import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890', alignSelf: 'flex-start' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#919062', alignSelf: 'flex-end' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#23062c', alignSelf: 'center' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#301a6d', alignSelf: 'stretch' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#c5c217', alignSelf: 'auto' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#171418' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b0a3b4' }}>Box 7</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
