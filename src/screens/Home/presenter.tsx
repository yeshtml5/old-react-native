/**
 *
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, StackActions, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';
import * as Screen from '@screens';

const Stack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */

const HomeScreen = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => {
          console.log(MENU_NAMES);
          navigation.dispatch(
            StackActions.push(MENU_NAMES.MAP, {
              title: 'my_title',
            }),
          );
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
      <Stack.Screen
        name="HomeScreen"
        component={Screen.HomeScreen}
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
