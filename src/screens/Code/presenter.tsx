import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
// contents
import AsyncAwait from './async-await';
import AsyncStroage from './async-storage';
import UseForm from './useForm';
import WebView from './webview';
import Unsplash from './unsplash';
import SwipeGesture from './swipe-gesture';

type Props = {
  contentsName?: string; //컨텐츠메뉴명
};

function Presenter({ contentsName }: Props) {
  // 선택된컨턴츠에따라 분기처리해서보여준다
  const displayConents = () => {
    switch (contentsName) {
      case 'AsyncAwait':
        return <AsyncAwait />;
      case 'AsyncStroage':
        return <AsyncStroage />;
      case 'UseForm':
        return <UseForm />;
      case 'WebView':
        return <WebView />;
      case 'Unsplash':
        return <Unsplash />;
      case 'SwipeGesture':
        return <SwipeGesture />;
      default:
        return (
          <EmptyContents>
            <EmptyTitle>선택된메뉴가없습니다.</EmptyTitle>
          </EmptyContents>
        );
    }
  };
  return (
    <React.Fragment>
      <Container>{displayConents()}</Container>
    </React.Fragment>
  );
}
export default Presenter;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
const EmptyContents = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const EmptyTitle = styled.Text`
  color: #000;
  font-size: 20;
`;
