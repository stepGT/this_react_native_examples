import { Text, View, Image, Button, Pressable } from 'react-native';
const logo = require('../assets/images/react-logo.png');
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Button title="Press" onPress={() => console.log('Button onPress')} color="midnightblue" />

      <Pressable
        onLongPress={() => console.log('Image onLongPress')}
        onPressIn={() => console.log('Image onPress')}
        onPressOut={() => console.log('Image onPressOut')}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </Pressable>

      <Pressable
        onLongPress={() => console.log('Text onLongPress')}
        onPressIn={() => console.log('Text onPress')}
        onPressOut={() => console.log('Text onPressOut')}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quos, quae quasi,
          deleniti, adipisci nesciunt nam fuga sequi sint eius exercitationem nisi esse libero eum
          ex inventore. Earum repudiandae optio assumenda soluta quod minima suscipit ut. Neque vero
          sed minus necessitatibus reprehenderit fugit, nesciunt eveniet delectus accusamus fugiat
          minima unde, rerum nostrum quas, magnam fuga atque corrupti nihil molestias qui ex a!
          Inventore corrupti magni, ad est unde dolore, reprehenderit corporis recusandae incidunt
          pariatur doloremque voluptatem fugit minus libero at a quasi beatae ducimus consequatur
          dolorum nemo debitis animi? Perspiciatis et a veniam officiis hic sed, ab consectetur quos
          alias!
        </Text>
      </Pressable>
    </View>
  );
}
