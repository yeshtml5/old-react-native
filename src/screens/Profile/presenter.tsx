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
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';

type Props = {
  data: any[];
};
const Profile = ({ data }: Props) => {
  const createCard = () => {
    return data.data.map((list, idx) => {
      return (
        <React.Fragment>
          <Text>{list.employee_name}</Text>
          <Text>{list.employee_age}</Text>
          <Text>{list.employee_salary}</Text>
        </React.Fragment>
      );
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>{createCard()}</ScrollView>
      <Text>프로필페이지1</Text>
    </SafeAreaView>
  );
};
export default Profile;
