import {Pressable, Image, StyleSheet, Text, View} from 'react-native';
export default function BottomHud() {
  return (
    <View style={styles.root}>
      <Pressable title="">
        <Image style={styles.image} source={require('../assets/icons8-time-machine-96.png')} />
        <Text style={styles.text} >History</Text>
      </Pressable>
      <Pressable title="">
        <Image style={styles.image} source={require('../assets/icons8-medium-icons-96-2.png')} />
        <Text style={styles.text} >Board</Text>
      </Pressable>
      <Pressable title="">
        <Image style={styles.image} source={require('../assets/icons8-cards-96.png')} />
        <Text style={styles.text} >Cards</Text>
      </Pressable>
      <Pressable title="">
        <Image style={styles.image} source={require('../assets/icons8-chat-message-96.png')} />
        <Text style={styles.text} >Chat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    paddingTop: 5,
    width: '100%',
    backgroundColor: '#402218',
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    color: 'white',
  },
})
