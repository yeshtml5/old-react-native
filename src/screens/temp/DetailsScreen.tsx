/**
 * @title Dummy Screens
 * @date 20.06.27
 */
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const DetatilsScreen = ({navigation}) => {
  return (
    <View style={styles.detatils}>
      <Text>$$DetatilsScreen</Text>
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
export default DetatilsScreen;

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
