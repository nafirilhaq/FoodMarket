import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const Splash = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 30}} />
      <Text style={{fontSize: 32, fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
