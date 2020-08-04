/**
 *
 */
import React from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-tiny-toast';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MENU_NAMES } from '@app/lib';
import { useGlobalDispatch, useGlobalState } from '@app/contexts';

const Presenter = () => {
  // context
  const context = useGlobalState();
  const dispatch = useGlobalDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StyledButton
        onPress={() => {
          console.log(context);
          Toast.show(JSON.stringify(context));
          dispatch({ type: 'UPDATE', 'add-custom': 'Iphone' });
          return;

          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.STACK,
            }),
          );
        }}>
        <Text>HOME</Text>
      </StyledButton>

      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.MAIN,
              params: { currentTab: MENU_NAMES.PROFILE },
            }),
          );
        }}>
        <Text>프로필-OVERVIEW</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.LAB,
            }),
          );
        }}>
        <Text>Lab</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.PROFILE,
            }),
          );
        }}>
        <Text>Profile</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.TEMPLATE1,
            }),
          );
        }}>
        <Text>Template1</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.TEMPLATE2,
            }),
          );
        }}>
        <Text>Template2</Text>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: MENU_NAMES.CODE,
              params: { mode: 'SwipeGesture' },
            }),
          );
        }}>
        <Text>CODE -> swipe-gesture</Text>
      </StyledButton>
    </SafeAreaView>
  );
};
export default Presenter;

const StyledButton = styled.TouchableOpacity`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  color: #ffffff;
  background-color: orange;
  align-items: center;
`;
