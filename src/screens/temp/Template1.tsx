/**
 *
 */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//screens
import {Template2} from '@screens/';

export default function Template1({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => navigation.push('Home1')}
          title="Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>텍스트111</Text>
      </View>
    </SafeAreaView>
  );
}
