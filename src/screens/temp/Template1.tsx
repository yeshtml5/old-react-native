/**
 *
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//screens
import { Template2 } from '@screens/index';

export default function Template1({ navigation }) {
  console.log(navigation);
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => navigation.navigate('Overview')}
          title="Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>텍스트111222222</Text>
      </View>
    </SafeAreaView>
  );
}
