import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890' }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#919062' }}>Box 2 shrink</Box>
      <Box style={{ backgroundColor: '#3d5d88' }}>Box 3 shrink</Box>
      <Box style={{ backgroundColor: '#4b2144' }}>Box 4 shrink</Box>
      <Box style={{ backgroundColor: '#ca0e2d' }}>Box 5 shrink</Box>
      <Box style={{ backgroundColor: '#eeec66' }}>Box 6 shrink</Box>
      <Box style={{ backgroundColor: '#26da26' }}>Box 7 shrink</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
