/**
 * 스와이프
 * @referlence react-native-swipe-gestures
 */
import React from 'react';
import Toast from 'react-native-tiny-toast';

import { View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

// depth

type Props = {};

export default function AsyncAwait({  }: Props) {
  return (
    <GestureRecognizer
      onSwipe={direction => {
        if (direction) Toast.show(direction, { position: Toast.position.CENTER, duration: 20 });
      }}
      style={{
        flex: 1,
        backgroundColor: '#ccc',
      }}>
      <View>
        <Text>react-native-swipe-gestures</Text>
      </View>
    </GestureRecognizer>
  );
}
