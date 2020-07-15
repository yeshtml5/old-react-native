/**
 * @type Button
 * @desc 헤더에서 공통으로 사용되는 홈으로 이전 버튼
 */
import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ico_btn_back } from '@dosoo/assets';

const StyledBackButton = styled.TouchableOpacity`
  padding: 16px 30px 0 15px;
`;
const IconBack = styled.Image`
  bottom: 8px;
  width: 8px;
  height: 14px;
`;

function BackButton({  }: StackHeaderLeftButtonProps) {
  const navigation = useNavigation();
  return (
    <StyledBackButton
      activeOpacity={0.8}
      onPress={event => {
        event.preventDefault();
        navigation.dispatch(CommonActions.goBack());
      }}>
      <Text>이전</Text>
    </StyledBackButton>
  );
}

export default BackButton;
