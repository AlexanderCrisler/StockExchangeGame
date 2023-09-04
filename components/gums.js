import {StyleSheet, Text, View} from 'react-native';

function Gums(props) {
  number = props.number;
  name = props.name;
  turn = props.turn;
  color = props.color;

  return (
    <View style={styles(color).root}>
      <Text style={styles.text}>{number} - {name}{turn}</Text>
    </View>
  );
}

const styles = (props?: any) => StyleSheet.create({
  root: {
    width: 375,
    height: 32,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: {color},
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    fontWeight: '900',
    opacity: .15,
  },
});

export default Gums;
