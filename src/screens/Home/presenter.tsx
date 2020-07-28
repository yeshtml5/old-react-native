/**
 *
 */
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MENU_NAMES } from '@app/lib';
import { GeolocationInfo } from './container';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
  weatherList?: any;
  positionInfo?: GeolocationInfo;
};

const Presenter = ({ weatherList, positionInfo }: Props) => {
  const { description, icon, main } = weatherList.weather[0];
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(StackActions.push(MENU_NAMES.CODE));
          }}>
          <Text>CODE</Text>
        </TouchableOpacity>
        <View>
          <Image
            style={styles.icon}
            source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
          />
          <Text style={styles.title}>{main}</Text>
          <Text style={styles.title1}>{description}</Text>
          <Text>{JSON.stringify(weatherList, null, 1)} </Text>
        </View>

        <View>
          <Text>위도 {positionInfo&&positionInfo.latitude&& positionInfo.latitude}</Text>
            <Text>경도 {positionInfo?.longitude}</Text>
        <Text>{positionInfo?.time}</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};
export default Presenter;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  title1: {
    fontSize: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  button: {
    padding: 30,
    backgroundColor: '#CCCCCC',
  },
});
