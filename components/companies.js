import {StyleSheet, Text, View} from 'react-native';

export default function Companies(props) {
  companyAbbreviationList = props.companies;
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{companyAbbreviationList[0]}</Text>
      <Text style={styles.text}>{companyAbbreviationList[1]}</Text>
      <Text style={styles.text}>{companyAbbreviationList[2]}</Text>
      <Text style={styles.text}>{companyAbbreviationList[3]}</Text>
      <Text style={styles.text}>{companyAbbreviationList[4]}</Text>
      <Text style={styles.text}>{companyAbbreviationList[5]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 30,
    maxHeight: 30,
  },
  text: {
    color: 'white',
  }
})
