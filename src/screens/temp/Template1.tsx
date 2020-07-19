/**
 *
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//screens
import { Template2 } from '@app/screens';

export default function Template1({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Template1 vpdlwl</Text>
        <Button
          onPress={() => navigation.navigate('Overview')}
          title="Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="ProfileScreen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>텍스트111222222</Text>
      </View>
    </SafeAreaView>
  );
}
