import { useState } from 'react';
import { Text, View, Image, Button, Pressable, Modal } from 'react-native';
const logo = require('../assets/images/react-logo.png');
export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Button title="Press" onPress={() => setIsModalVisible(true)} color="midnightblue" />
      <Modal
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
        visible={isModalVisible}
        presentationStyle="pageSheet">
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightblue',
            padding: 60,
          }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium amet
            molestiae modi vel repellendus placeat labore soluta quis inventore, et tempore
            explicabo deleniti incidunt? Dolore magni nihil doloremque cumque.
          </Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} color="midnightblue" />
        </View>
      </Modal>
    </View>
  );
}
