/**
 *
 */
import React from 'react';
import { Button, SafeAreaView, View, Text, StyleSheet } from 'react-native';
//navigation
import { createStackNavigator } from '@react-navigation/stack';

/**
 * @title dfdsfsd
 * @desc  HOME
 */
const LabScreen = () => {
  return (
    <SafeAreaView>
      <Text>LabScreen</Text>
    </SafeAreaView>
  );
};
export default LabScreen;

const styles = StyleSheet.create({
  header: {
    elevation: 100,
    borderBottomWidth: 0,
    borderBottomColor: '#111',
    backgroundColor: '#E1E1E1',
    //backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#111111',
    fontWeight: '400',
  },
});
