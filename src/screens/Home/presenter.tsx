/**
 *
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MENU_NAMES } from '@app/lib';
import { GeolocationInfo } from './container';

type Props = {
  weatherList: {};
  positionInfo: GeolocationInfo;
};

const Presenter = ({ weatherList, positionInfo }: Props) => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.dispatch(StackActions.push(MENU_NAMES.CODE));
        }}>
        <Text>CODE</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};
export default Presenter;

const styles = StyleSheet.create({
  button: {
    padding: 30,
    backgroundColor: '#CCCCCC',
  },
});
