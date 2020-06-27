/**
 * @title Dummy Screens
 * @date 20.06.27
 */
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

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
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'column',
  },
  detatils: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'column',
  },
});
