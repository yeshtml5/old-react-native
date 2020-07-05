/**
 *
 */
import React from 'react';
import { Button, SafeAreaView, View, Text, StyleSheet } from 'react-native';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
/**
 * @title dfdsfsd
 * @desc  HOME
 */
const LabScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>LabScreen</Text>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <View>
        <Button
          onPress={() => navigation.navigate('Overview')}
          title="Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>텍스트111222222</Text>
      </View>
    </SafeAreaView>
  );
};
export default LabScreen;

/**
 *
 */
export const LabStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '랩실',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="Home"
        navigation={navigation}
        component={LabScreen}
        options={{
          title: 'HOME',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#000000"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    elevation: 100,
    borderBottomWidth: 0,
    borderBottomColor: '#111',
    backgroundColor: '#E1E1E1',
    //backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#111111',
    fontWeight: '400',
  },
});
