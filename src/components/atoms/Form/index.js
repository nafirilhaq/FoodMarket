import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Form = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.form}></TextInput>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 1,
  },
  title: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
  form: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
