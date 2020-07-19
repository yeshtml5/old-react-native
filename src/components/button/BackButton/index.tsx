/**
 * @type Button
 * @desc 헤더에서 공통으로 사용되는 백버튼
 */

import React from 'react';
import styled from 'styled-components/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ico_back_button } from '@app/assets';

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
        navigation.dispatch(CommonActions.goBack);
      }}>
      <Icon source={ico_back_button} />
    </StyledHomeButton>
  );
}

export default Component;
