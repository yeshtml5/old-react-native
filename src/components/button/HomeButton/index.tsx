/**
 * @type Button
 * @desc 헤더에서 공통으로 사용되는 홈으로 가기 버튼
 */

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { MENU_NAMES } from '@app/lib';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledHomeButton = styled.TouchableOpacity`
  /* padding: 16px 30px 0 15px; */
`;
const IconBack = styled.Image`
  /* bottom: 8px;
  width: 15px;
  height: 15px; */
`;

function Component({  }: StackHeaderLeftButtonProps) {
  const navigation = useNavigation();
  return (
    <StyledHomeButton
      activeOpacity={0.8}
      onPress={event => {
        event.preventDefault();
        navigation.dispatch(
          CommonActions.navigate({
            name: MENU_NAMES.TEMPLATE1,
          }),
        );
      }}>
      <Text>홈</Text>
    </StyledHomeButton>
  );
}

export default Component;
