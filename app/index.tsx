import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#919062' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#23062c' }}>Box 3</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
