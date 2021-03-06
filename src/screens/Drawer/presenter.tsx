/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 * Icon : https://oblador.github.io/react-native-vector-icons/
 */

import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MENU_NAMES } from '@app/lib';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Screen from '@app/screens';

type Avatar = {
  url: string;
};
type Props = {};
//create
const DrawerNav = createDrawerNavigator();

export default function Presenter({  }: Props) {
  return (
    <DrawerNav.Navigator initialRouteName={MENU_NAMES.STACK}>
      <DrawerNav.Screen name={MENU_NAMES.STACK} component={Screen.Stack} />
      <DrawerNav.Screen name={MENU_NAMES.LAB} component={Screen.Lab} />
    </DrawerNav.Navigator>
  );
}
/**
 *
 * @param props
 */

// export const DrawerContents = ({  }: Props) => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <DrawerContentScrollView style={styles.scrollView} {...props}>
//         {/* 상단유틸영역 */}
//         <View style={{ flexDirection: 'row', marginTop: 15 }}>
//           <Avatar.Image source={profile_me} size={50} />
//           <View style={{ marginLeft: 20, flexDirection: 'column' }}>
//             <Title>wanhwi.son</Title>
//             <Caption>yeshtml5@gmail.com</Caption>
//           </View>
//         </View>
//         {/* 네비게이션영역 */}
//         {/* <DrawerItemList {...props} /> */}
//         <Drawer.Section style={styles.items}>
//           <DrawerItem
//             label="Home"
//             onPress={() => {
//               navigation.dispatch(
//                 CommonActions.navigate({
//                   name: MENU_NAMES.HOME,
//                 }),
//               );
//               navigation.closeDrawer();
//             }}
//             icon={({ color, size }) => <Icon name="home-outline" size={size} color={color} />}
//           />
//           <DrawerItem
//             label="Overview"
//             onPress={() => {
//               navigation.jumpTo('Overview');
//               navigation.closeDrawer();
//             }}
//             icon={({ color, size }) => <Icon name="apps" size={size} color={color} />}
//           />
//           <DrawerItem
//             label="Lab"
//             onPress={() => {
//               navigation.jumpTo('Lab');
//               navigation.closeDrawer();
//             }}
//             icon={({ color, size }) => (
//               <Icon name="language-javascript" size={size} color={color} />
//             )}
//           />
//           <DrawerItem
//             label="Profile"
//             onPress={() => {
//               navigation.jumpTo('Profile');
//               navigation.closeDrawer();
//             }}
//             icon={({ color, size }) => <Icon name="account" size={size} color={color} />}
//           />
//           <DrawerItem
//             label="Map"
//             onPress={() => navigation.closeDrawer()}
//             icon={({ color, size }) => <Icon name="map-outline" size={size} color={color} />}
//           />
//           <DrawerItem
//             label="Camera"
//             onPress={() => navigation.closeDrawer()}
//             icon={({ color, size }) => <Icon name="camera" size={size} color={color} />}
//           />
//         </Drawer.Section>
//         <Drawer.Section>
//           <DrawerItem label="닫기" onPress={() => navigation.closeDrawer()} />
//           <View>
//             <Text>Dark Theme</Text>
//             <Switch
//               value={evt => {
//                 console.log(evt);
//               }}
//             />
//           </View>
//         </Drawer.Section>
//         {/* 하단 */}
//         <View style={styles.footer}>
//           <Text>yeshtml5@gmail.com</Text>
//         </View>
//       </DrawerContentScrollView>
//     </View>
//   );
// };

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
