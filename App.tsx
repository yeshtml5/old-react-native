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
  StatusBar,
} from 'react-native';
//contexts
import Color from 'contexts/color.ts';
//screen
import Main from 'screens/main/index.tsx';
//type
export type Props = {};

const App: React.FC<Props> = () => {
  //--------------------------------------------------------
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Main />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default App;
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
