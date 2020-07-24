/**
 * @reference https://dev.to/mukeshmandiwal/webview-data-flow-with-webviews-in-a-react-native-app-and-navigation-4396
 */
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MENU_NAMES } from '@app/lib';

type Props = {
  webViewUrl: string;
};

export default function Webview({ webViewUrl = 'https://map.kakao.com' }: Props) {
  const webviewRef = React.useRef(null);
  const navigation = useNavigation();

  const onTrigger = () => {
    const runFirst = `
    document.body.style.backgroundColor = 'green';
    setTimeout(function() { window.alert(JSON.stringify([
           'a',
           'b',
           'c',
        ])) }, 1000);
    true; // note: this is required, or you'll sometimes get silent failures
  `;
    return code;
  };
  const onMessage = data => {
    //메인으로이동
    const info = data.nativeEvent.data;
    Alert.alert(info);
    navigation.dispatch(StackActions.push(MENU_NAMES.MAIN));
  };

  const runFirst = `
  document.body.style.backgroundColor = 'green';
  setTimeout(function() { window.alert(JSON.stringify([
         'a',
         'b',
         'c',
      ])) }, 1000);
  true; // note: this is required, or you'll sometimes get silent failures
`;
  return (
    <React.Fragment>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: webViewUrl }}
        source={{
          html: `<body style="display:flex; justify-content:center;flex-direction:column;align-items:center">
              <h2>React native webview</h2>
              <h2>React native webview data transfer between webview to native</h2>
              <button style="color:green; height:100;width:300;font-size:30px"
               onclick="myFunction()">Send data to Native</button>
              <p id="demo"></p>
              <script>
                const data = [
                    'Javascript',
                    'React',
                    'React Native',
                    'graphql',
                    'Typescript',
                    'Webpack',
                    'Node js',
                 ];
               function myFunction() {
                 window.ReactNativeWebView.postMessage(JSON.stringify(data))
               }
               var i, len, text;
               for (i = 0, len = data.length, text = ""; i < len; i++) {
               text += data[i] + "<br>";
               }
              document.getElementById("demo").innerHTML = text;
             </script>
          </body>`,
        }}
        //ref={webviewRef}
        onMessage={onMessage}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        useWebKit={true}
        injectedJavaScript={runFirst}
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
