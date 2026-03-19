import Greet from '../components/Greet';
import { View, Alert, Button } from 'react-native';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert(
            'Invalidate data!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae neque molestias laudantium nobis hic voluptate quidem voluptatibus porro odio, quia atque quam adipisci. Minus quas totam similique quae dicta.',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel pressed!') },
              { text: 'Ok', onPress: () => console.log('Ok pressed!') },
            ],
          )
        }
      />
      <Greet name={'stepGT'} />
    </View>
  );
}
