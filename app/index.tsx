import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#919062' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#23062c' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#301a6d' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#c5c217' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#171418' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b0a3b4' }}>Box 7</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
