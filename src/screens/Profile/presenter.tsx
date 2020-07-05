/**
 *
 */
import React from 'react';
import { Button, View, Text, Image, StyleSheet, Alert } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import { Home, HomeScreen, DetatilsScreen } from '@screens/';
//style
//components
import BottomTab from '@components/common/BottomTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from 'contexts/color.ts';
const Tab = createBottomTabNavigator();

export default function Presenter() {
  return (
    <View style={styles.container}>
      {/* 타이틀 */}
      <Text style={styles.title}>Screen Main Title</Text>
      {/* 이미지 */}
      <Image style={styles.image} source={require('assets/images/img1.jpg')} />
      {/* 버튼 */}
      <BottomTab />
    </View>
  );
}

//--------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    marginBottom: 20,
    height: 400,
    alignItems: 'stretch',
    resizeMode: 'contain', //optional
  },
  title: {
    fontSize: 20,
  },
  button: {
    width: 200,
    padding: 10,
    color: Color.red,
    backgroundColor: Color.black,
  },
});
