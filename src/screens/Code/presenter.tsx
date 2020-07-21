import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// depth
import AsyncAwait from './async-await';
import AsyncStroage from './async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  contentsName?: string; //컨텐츠메뉴명
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ccc;
`;
function Presenter({ contentsName }: Props) {
  // 선택된컨턴츠에따라 분기처리해서보여준다
  const displayConents = () => {
    switch (contentsName) {
      case 'AsyncAwait':
        return <AsyncAwait />;
      case 'AsyncStroage':
        return <AsyncStroage />;
      default:
        return <Text>선택된메뉴가없습니다.</Text>;
    }
  };
  return (
    <React.Fragment>
      <Container>{displayConents()}</Container>
    </React.Fragment>
  );
}

export default Presenter;
