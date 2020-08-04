/**
 *
 */
import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Overview = () => {
  const requestLocationPermission = async () => {
    try {
      // 퍼미션 요청 다이얼로그 보이기
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        alert('위치정보 사용을 허가하셨습니다.');
      } else {
        alert('위치정보 사용을 거부하셨습니다.\n앱의 기능사용이 제한됩니다.');
      }
    } catch (err) {
      alert('퍼미션 작업 에러');
    }
  };

  useEffect(() => {
    (async () => {
      const result = await requestLocationPermission();
    })();
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          Geolocation.getCurrentPosition(
            position => {
              // 성공했을때 실행되는 영역
              // 파라미터로 받은 info객체 안에 좌표객체 정보 있음.
              Alert.alert('[권한요청]', JSON.stringify(position.coords, null, 1));
            },
            error => {
              // 퍼미션이 없으면 에러!!! AndroidManifest.xml에서 추가
              // API 26버전부터 동적 퍼미션이 추가됨.
              // Geolocation은 동적퍼미션을 자동으로 해주지 않음
              Alert.alert('error : ' + error.message);
            },
          );
          // Alert.alert('[권한요청]', '메시지');
        }}>
        <Text>Overview 페이지</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Overview;

const styles = StyleSheet.create({
  header: {
    elevation: 100,
    borderBottomWidth: 0,
    borderBottomColor: '#111',
    backgroundColor: '#E1E1E1',
    //backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#111111',
    fontWeight: '400',
  },
});
