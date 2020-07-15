/**
 *
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, StackActions, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Screen from '@app/screens';
import { MENU_NAMES } from '@app/lib';
import { HomeButton } from '@app/components';
const Stack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Profile');
          //  navigation.dispatch(StackActions.push(MENU_NAMES.OVERVIEW));
        }}>
        <Text>클릭</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
export default HomeScreen;

/**
 *
 */
export const HomeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'HOME',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen name={MENU_NAMES.HOME} component={Screen.HomeScreen} />
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
  button: {
    padding: 30,
    backgroundColor: '#ff0000',
  },
});
