/**
 *
 */
import React from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-tiny-toast';
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native';
import { Button, SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';

const Stack = createStackNavigator();

const StyledButton = styled.TouchableOpacity`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  color: #ffffff;
  background-color: orange;
  align-items: center;
`;
/**
 * @title
 * @desc  Presenter
 */
const Presenter = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StyledButton
        onPress={() => {
          Toast.show('LAB');
          navigation.dispatch(StackActions.push(MENU_NAMES.MAIN, { currentTab: MENU_NAMES.LAB }));
        }}>
        <Text>LAB</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          Toast.show('Overview');
          navigation.dispatch(
            StackActions.push(MENU_NAMES.MAIN, { currentTab: MENU_NAMES.OVERVIEW }),
          );
        }}>
        <Text>Overview</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          Toast.show('PROFILE');
          navigation.dispatch(
            StackActions.push(MENU_NAMES.MAIN, { currentTab: MENU_NAMES.PROFILE }),
          );
        }}>
        <Text>PROFILE</Text>
      </StyledButton>
    </SafeAreaView>
  );
};
export default Presenter;
