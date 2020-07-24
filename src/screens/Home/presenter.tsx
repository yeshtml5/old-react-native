/**
 *
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MENU_NAMES } from '@app/lib';

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.dispatch(StackActions.push(MENU_NAMES.CODE));
        }}>
        <Text>CODE1</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
export default Home;

const styles = StyleSheet.create({
  button: {
    padding: 30,
    backgroundColor: '#CCCCCC',
  },
});
