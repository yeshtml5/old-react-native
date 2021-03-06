/**
 * @type Button
 * @desc 헤더에서 공통으로 사용되는 메뉴
 */

import React from 'react';
import styled from 'styled-components/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { ico_menu } from '@app/assets';

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
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Icon source={ico_menu} />
    </StyledHomeButton>
  );
}

export default Component;
