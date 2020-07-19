/**
 * @type Button
 * @desc 헤더에서 공통으로 사용되는 설정으로 가기 버튼
 */

import React from 'react';
import styled from 'styled-components/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { MENU_NAMES } from '@app/lib';
import { ico_settings } from '@app/assets';

const StyledHomeButton = styled.TouchableOpacity`
  padding: 10px;
`;
const Icon = styled.Image`
  width: 20px;
  height: 20px;
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
      <Icon source={ico_settings} />
    </StyledHomeButton>
  );
}

export default Component;
