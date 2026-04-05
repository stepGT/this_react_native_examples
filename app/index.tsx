import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import pokemonList from '../data.json';
//
export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaProvider>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
