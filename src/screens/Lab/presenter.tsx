/**
 *
 */
import React from 'react';
import styled from 'styled-components/native';
import { CommonActions, useNavigation } from '@react-navigation/native';
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
 * @title dfdsfsd
 * @desc  HOME
 */
const LabScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StyledButton
        onPress={() => {
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
    </SafeAreaView>
  );
};
export default LabScreen;

/**
 *
 */
export const LabStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '랩실',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name={MENU_NAMES.LAB}
        component={LabScreen}
        options={{
          title: 'HOME',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#000000"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
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
