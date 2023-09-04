import {StyleSheet, Text, View} from 'react-native';

export default function Teeth() {
  return (
    <View style={styles.root}>
      <Tooth />
      <Tooth />
      <Tooth />
      <Tooth />
      <Tooth />
      <Tooth />
    </View>
  );
}

function Tooth(props) {
  investment = props.investment;
  shortType = props.short;

  return (
    <View style={styles.tooth}>
      <View style={styles.tallTooth}>
        <Text>{investment}</Text>
      </View>
      <View style={styles.shortTooth}>
        <Text>{shortType}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 65,
    maxHeight: 65,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tooth: {
    width: 60,
    backgroundColor: '#FFFFFF',
    opacity: .15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tallTooth: {},
  shortTooth: {},
})
