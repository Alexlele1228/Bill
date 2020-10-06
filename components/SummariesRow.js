import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Summary } from './Summary';
import RNPickerSelect from 'react-native-picker-select';

export const SummariesRow = (props) => {




  return (
    <View style={styles.main}>
     
      <Summary style={styles.SummaryLe} owner='  Rae😭 :' amount={'💰' + props.LeAmount} />
      <Summary style={styles.SummarySw} owner='  Alex😍 :' amount={'💰' + props.SwAmount} />
    </View>
  )


}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  SummaryLe: {
    padding: 5,

    textAlign: 'center',
    fontSize: 20,

  },
  SummarySw: {
    padding: 5,

    textAlign: 'center',
    fontSize: 20,
  }


})

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontWeight:'bold',
    fontSize:17,
    padding:5,
    textAlign:"center",
  },
  inputAndroid: {
    padding: 10,
    flex:1
  }
})


