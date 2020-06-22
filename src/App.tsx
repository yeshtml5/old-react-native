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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from 'screens/main/index.tsx';
//type
export type Props = {};

const App: React.FC<Props> = ({navigation}) => {
  //--------------------------------------------------------
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Develop</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Main /> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );
};
export default App;
export function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
//--------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: Color.white,
  },
});
