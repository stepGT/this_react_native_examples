import Box from '@/components/Box';
import { View, StyleSheet } from 'react-native';
//
export default function Index() {
  return (
    <View style={style.container}>
      <Box style={{ backgroundColor: '#89e890', flexShrink: 1 }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#919062', flexShrink: 2 }}>Box 2 shrink</Box>
    </View>
  );
}
//
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    borderWidth: 6,
    borderColor: 'red',
    marginTop: 64,
  },
});
