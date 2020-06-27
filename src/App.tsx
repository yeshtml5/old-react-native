/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

//contexts
import Color from 'contexts/color.ts';
//screen
import Main from 'screens/main/index.tsx';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//type
export type Props = {};
/**
 *
 */
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};
/**
 *
 */
const DetatilsScreen = ({navigation}) => {
  return (
    <View style={styles.detatils}>
      <Text>DetatilsScreen</Text>
      <Button
        title="Go to details again.. again"
        onPress={() => {
          navigation.push('Details');
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="GoBack"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};
/**
 *
 */
const Stack = createStackNavigator();
const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen name="Details" component={DetatilsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    flexDirection: 'column',
  },
  detatils: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: Color.white,
  },
});
