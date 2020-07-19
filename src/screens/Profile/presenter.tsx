/**
 * @name Profile
 */
import React from 'react';
import { Button, View, Text, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>프로필페이지</Text>
      <Button
        onPress={() => navigation.navigate(MENU_NAMES.MAIN)}
        title="MAIN"
        color="#ff0000"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
export default Profile;
