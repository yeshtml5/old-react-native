import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  webViewUrl: string;
};

export default function Webview({ webViewUrl = 'https://map.kakao.com' }: Props) {
  return (
    <React.Fragment>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: webViewUrl }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        useWebKit={true}
      />
      <Container>
        <StyledButton
          onPress={() => {
            Alert.alert('test');
          }}>
          <Title>RELOAD</Title>
        </StyledButton>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.View`
  margin-top: 30;
`;
const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;
const Title = styled.Text`
  color: #ffffff;
  padding: 10px 30px;
  font-size: 16;
  text-align: center;
  background-color: #111;
`;
