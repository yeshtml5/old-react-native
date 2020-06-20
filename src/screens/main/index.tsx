import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
//style

//type
export interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      {/* 타이틀 */}
      <Text style={styles.title}>Screen Main Title</Text>
      {/* 이미지 */}
      <Image style={styles.image} source={require('assets/images/img1.jpg')} />
    </View>
  );
};
export default Main;
//--------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  image: {
    height: 400,
    alignItems: 'stretch',
    resizeMode: 'contain', //optional
  },
  title: {
    fontSize: 20,
  },
});
