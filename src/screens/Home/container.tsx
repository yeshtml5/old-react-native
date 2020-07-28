/**
 * @desc 지도위치를구해서 날씨정보가져오기
 */

import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
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
  const API_KEY = 'd8eb6e9f63011a29c3567236144c3937REACT';
  const [weatherList, setWeatherList] = useState<WeatherList | null>(null);
  const [positionInfo, setPositionInfo] = useState<GeolocationInfo>({
    latitude: -1,
    longitude: -1,
    time: '',
  });
  const requestLocationPermission = async () => {
    try {
      // 퍼미션 요청 다이얼로그 보이기
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        // alert('위치정보 사용을 허가하셨습니다.');
        getCurrentPosition();
      } else {
        alert('위치정보 사용을 거부하셨습니다.\n앱의 기능사용이 제한됩니다.');
      }
    } catch (err) {
      alert('퍼미션 작업 에러');
    }
  };
  //37.409451, 126.936010
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(info => {
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
          setWeatherList(json);
        });
    });
  };
  useEffect(() => {
    (async () => {
      const result = await requestLocationPermission();
      console.log(result);
    })();
  }, []);
  return weatherList && <Presenter weatherList={weatherList} positionInfo={positionInfo} />;
}
