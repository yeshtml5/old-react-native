import { Platform, Dimensions } from 'react-native';
import { SUBMIT_BUTTON_HEIGHT_IOS, SUBMIT_BUTTON_HEIGHT_ANDROID } from '@dosoo/constpack';

// 디바이스 해상도 별 width 값 가져오기
export const relativeWidth = (percentage?: number) => {
  if (percentage) {
    return Dimensions.get('screen').width * (percentage / 100);
  } else {
    return Dimensions.get('screen').width * 0.7;
  }
};

export const getSubmitButtonHeight = () => {
  return Platform.OS === 'ios' ? SUBMIT_BUTTON_HEIGHT_IOS : SUBMIT_BUTTON_HEIGHT_ANDROID;
};
