import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Form, Gap, Header} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Gap height={24} />
      <View style={styles.body}>
        <Gap height={29} />
        <Form title="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Form title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={4} />
        <Button text="Create New Account" color="#8D92A3" textColor="#FFFFFF" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
});
