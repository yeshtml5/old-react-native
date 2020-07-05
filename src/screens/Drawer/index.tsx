/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 * Icon : https://oblador.github.io/react-native-vector-icons/
 */

import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { Drawer, Switch, Title, Avatar, Text, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
//screen
import { Home, Profile } from '@screens/index';

export type Props = {
  navigation?: any;
  url: string;
};
type Avatar = {
  url: string;
};

//create
const DrawerNav = createDrawerNavigator();

const DrawerScreen: React.FC<Props> = props => {
  //const
  const dimensions = useWindowDimensions();

  return (
    <DrawerNav.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      //#스타일링 drawerStyle={{ backgroundColor: '#FF0099', width: 300 }}
      overlayColor="transparent">
      <DrawerNav.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </DrawerNav.Navigator>
  );
};
export default DrawerScreen;

/**
 *
 * @param props
 */

export const DrawerContents: React.FC<Props> = ({ navigation, ...props }) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView style={styles.scrollView} {...props}>
        {/* 상단유틸영역 */}
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              url:
                'https://avatars1.githubusercontent.com/u/20413597?s=400&u=d0529ee06fbfdc0701664b262ac2e38936b420ee&v=4',
            }}
            size={50}
          />
          <View style={{ marginLeft: 20, flexDirection: 'column' }}>
            <Title>wanhwi.son</Title>
            <Caption>yeshtml5@gmail.com</Caption>
          </View>
        </View>
        {/* 네비게이션영역 */}
        {/* <DrawerItemList {...props} /> */}
        <Drawer.Section style={styles.items}>
          <DrawerItem
            label="Home"
            onPress={() => {
              navigation.navigate('Home');
            }}
            icon={({ color, size }) => (
              <Icon style={{ marginLeft: 0 }} name="home-outline" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="Profile"
            onPress={() => navigation.navigate('Profile')}
            icon={({ color, size }) => (
              <Icon style={{ marginLeft: 0 }} name="account" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="Lab"
            onPress={() => navigation.closeDrawer()}
            icon={({ color, size }) => (
              <Icon
                style={{ marginLeft: 0 }}
                name="language-javascript"
                size={size}
                color={color}
              />
            )}
          />
          <DrawerItem
            label="Map"
            onPress={() => navigation.closeDrawer()}
            icon={({ color, size }) => (
              <Icon style={{ marginLeft: 0 }} name="map-outline" size={size} color={color} />
            )}
          />
          <DrawerItem
            label="Camera"
            onPress={() => navigation.closeDrawer()}
            icon={({ color, size }) => (
              <Icon style={{ marginLeft: 0 }} name="camera" size={size} color={color} />
            )}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem label="닫기" onPress={() => navigation.closeDrawer()} />
          <View>
            <Text>Dark Theme</Text>
            <Switch
              value={evt => {
                console.log(evt);
              }}
            />
          </View>
        </Drawer.Section>
        {/* 하단 */}
        <View style={styles.footer}>
          <Text>yeshtml5@gmail.com</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  items: {
    marginTop: 50,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  footer: {
    marginBottom: 30,
    fontSize: 30,
    justifyContent: 'flex-end',
    backgroundColor: '#ccc',
    alignItems: 'stretch',
  },
});
