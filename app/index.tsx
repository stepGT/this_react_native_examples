import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890' }}>1</Box>
      <Box style={{ backgroundColor: '#919062' }}>2</Box>
      <Box style={{ backgroundColor: '#23062c' }}>3</Box>
      <Box style={{ backgroundColor: '#22554e' }}>4</Box>
      <Box style={{ backgroundColor: '#c92727' }}>5</Box>
      <Box style={{ backgroundColor: '#6e83a3' }}>6</Box>
      <Box style={{ backgroundColor: '#3a43a7' }}>7</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
