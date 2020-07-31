/**
 * @desc 지도위치를구해서 날씨정보가져오기
 */

import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import {
  requestMultiple,
  checkMultiple,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
import Presenter from './presenter';

type Props = {};
export type GeolocationInfo = {
  latitude: any;
  longitude: number;
  time?: string;
};
export type WeatherList = {};

export default function Container() {
  const API_KEY = 'd8eb6e9f63011a29c3567236144c3937';
  const [weatherList, setWeatherList] = useState<WeatherList | null>(null);
  const [positionInfo, setPositionInfo] = useState<GeolocationInfo>({
    latitude: -1,
    longitude: -1,
    time: '',
  });
  const getPermissions = () => {
    return Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.LOCATION_ALWAYS]
      : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION];
  };

  //37.409451, 126.936010
  const getCurrentPosition = async () => {
    await Geolocation.getCurrentPosition(
      info => {
        const { coords, timestamp } = info;
        const { latitude, longitude } = coords;
        setPositionInfo({
          latitude: latitude,
          longitude: longitude,
          time: moment(timestamp).format('YYYY년 MM월 DD일 HH시 mm분 SS초'),
        });
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        )
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            // API_KEY Error
            if (json.cod === 401) {
              Alert.alert('[토큰에러', json.message);
              setWeatherList(null);
            } else {
              console.log(json);
              setWeatherList(json);
            }
          });
      },
      err => {
        console.log(err);
      },
    );
  };
  useEffect(() => {
    (async () => {
      const statuses = await checkMultiple(getPermissions());
      console.log(statuses);
      if (!statuses) return;
      if (Platform.OS === 'ios') {
        const response = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (response === RESULTS.GRANTED) {
          const result = await getCurrentPosition();
        } else if (response === RESULTS.DENIED) {
          Alert.alert('[접근거부]', '거부되었습니다.');
        }
      } else if (Platform.OS === 'android') {
        const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (response === RESULTS.GRANTED) {
          const result = await getCurrentPosition();
        } else if (response === RESULTS.DENIED) {
          Alert.alert('[접근거부]', '거부되었습니다.');
        }
      }

      // const result = await requestLocationPermission();
      // const position = await getCurrentPosition();
    })();
  }, []);
  return weatherList && <Presenter weatherList={weatherList} positionInfo={positionInfo} />;
}
