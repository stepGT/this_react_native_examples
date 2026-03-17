import { Text, View, Image, ScrollView } from 'react-native';
const logo = require('../assets/images/react-logo.png');
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <ScrollView>
        <Image style={{ width: 300, height: 300 }} source={logo} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil laboriosam similique,
          quisquam amet fugit tenetur consequatur dolorum laborum vel nemo expedita quasi ipsam
          sapiente velit ipsa dolore corporis. Similique blanditiis, tempora omnis inventore
          adipisci sunt ullam ut consequatur! Reprehenderit, a explicabo! Facilis cupiditate quaerat
          aspernatur totam maxime tenetur, iure error incidunt, nisi iste atque illum molestiae
          aperiam, odio quae sapiente ab quidem consequuntur temporibus placeat adipisci numquam cum
          recusandae. Dignissimos quis dolorem, inventore reiciendis, accusamus quas doloremque
          aspernatur voluptate nobis ab laboriosam quidem eos iste deleniti accusantium molestias
          veniam. Odit, voluptas assumenda aperiam rem voluptate ullam necessitatibus. Adipisci,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil laboriosam
          similique, quisquam amet fugit tenetur consequatur dolorum laborum vel nemo expedita quasi
          ipsam sapiente velit ipsa dolore corporis. Similique blanditiis, tempora omnis inventore
          adipisci sunt ullam ut consequatur! Reprehenderit, a explicabo! Facilis cupiditate quaerat
          aspernatur totam maxime tenetur, iure error incidunt, nisi iste atque illum molestiae
          aperiam, odio quae sapiente ab quidem consequuntur temporibus placeat adipisci numquam cum
          recusandae. Dignissimos quis dolorem, inventore reiciendis, accusamus quas doloremque
          aspernatur voluptate nobis ab laboriosam quidem eos iste deleniti accusantium molestias
          veniam. Odit, voluptas assumenda aperiam rem voluptate ullam necessitatibus. Adipisci,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil laboriosam
          similique, quisquam amet fugit tenetur consequatur dolorum laborum vel nemo expedita quasi
          ipsam sapiente velit ipsa dolore corporis. Similique blanditiis, tempora omnis inventore
          adipisci sunt ullam ut consequatur! Reprehenderit, a explicabo! Facilis cupiditate quaerat
          aspernatur totam maxime tenetur, iure error incidunt, nisi iste atque illum molestiae
          aperiam, odio quae sapiente ab quidem consequuntur temporibus placeat adipisci numquam cum
          recusandae. Dignissimos quis dolorem, inventore reiciendis, accusamus quas doloremque
          aspernatur voluptate nobis ab laboriosam quidem eos iste deleniti accusantium molestias
          veniam. Odit, voluptas assumenda aperiam rem voluptate ullam necessitatibus. Adipisci,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil laboriosam
          similique, quisquam amet fugit tenetur consequatur dolorum laborum vel nemo expedita quasi
          ipsam sapiente velit ipsa dolore corporis. Similique blanditiis, tempora omnis inventore
          adipisci sunt ullam ut consequatur! Reprehenderit, a explicabo! Facilis cupiditate quaerat
          aspernatur totam maxime tenetur, iure error incidunt, nisi iste atque illum molestiae
          aperiam, odio quae sapiente ab quidem consequuntur temporibus placeat adipisci numquam cum
          recusandae. Dignissimos quis dolorem, inventore reiciendis, accusamus quas doloremque
          aspernatur voluptate nobis ab laboriosam quidem eos iste deleniti accusantium molestias
          veniam. Odit, voluptas assumenda aperiam rem voluptate ullam necessitatibus. Adipisci,
          rerum.
        </Text>
        <Image style={{ width: 300, height: 300 }} source={logo} />
      </ScrollView>
    </View>
  );
}
