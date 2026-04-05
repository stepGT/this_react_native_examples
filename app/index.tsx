import CustomButton from '@/components/CustomButton.android';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
//
export default function Index() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton onPress={(e: any) => console.log(e)} title='Press me'></CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
//
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {},
      android: {
        color: 'red',
        fontSize: 30,
        fontStyle: 'italic',
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
