/**
 * @name Profile
 */
import React from 'react';
import {
  ScrollView,
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Dimensions } from 'react-native';
import { log } from '@app/lib';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';
import Image from 'react-native-scalable-image';

type Props = {
  unsplashData: any[];
};
const Profile = ({ unsplashData }: Props) => {
  if (!unsplashData) return null;

  const createUnsplash = () => {
    return unsplashData.map((list, idx) => {
      log(list);

      return (
        <React.Fragment>
          <Image width={Dimensions.get('window').width * 0.9} source={{ uri: list.urls.regular }} />
          <Text>{list.description}</Text>
          <Text>{list.location}</Text>
        </React.Fragment>
      );
    });
  };
  return (
    <SafeAreaView>
      <Text>프로필페이지</Text>
      <ScrollView>{createUnsplash()}</ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
