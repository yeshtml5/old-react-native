import React, {useEffect} from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native';
//style
import Color from 'contexts/color.ts';
//type

export interface Props {}

const Main: React.FC<Props> = () => {
  //--------------------------------------------------------
  //context
  const buttonEventHdr = event => {
    alert(event);
  };
  useEffect(() => {}, []);
  //--------------------------------------------------------
  return (
    <View style={styles.container}>
      {/* 타이틀 */}
      <Text style={styles.title}>Screen Main Title</Text>
      {/* 이미지 */}
      <Image style={styles.image} source={require('assets/images/img1.jpg')} />
      {/* 버튼 */}
      <View style={styles.button}>
        <Button
          title="Left buttonq"
          onPress={event => {
            buttonEventHdr(event);
          }}
        />
      </View>
      {/* 이미지 */}
      <Image style={styles.image} source={require('assets/images/img1.jpg')} />
      {/* 이미지 */}
      <Image style={styles.image} source={require('assets/images/img1.jpg')} />
    </View>
  );
};
export default Main;
//--------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    marginBottom: 20,
    height: 400,
    alignItems: 'stretch',
    resizeMode: 'contain', //optional
  },
  title: {
    fontSize: 20,
  },
  button: {
    width: 200,
    padding: 10,
    color: Color.red,
    backgroundColor: Color.black,
  },
});
