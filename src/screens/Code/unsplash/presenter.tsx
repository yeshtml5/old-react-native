/**
 * @name Profile
 */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView, TextInput, Linking, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { log } from '@app/lib';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';
import Image from 'react-native-scalable-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Unsplash = {
  id: string;
  description: string;
  location: string;
  urls: {
    regular: string;
  };
  user: {
    name: string | null;
    bio: string | null;
  };
  links: {};
};
type Props = {
  onChange: Function;
  unsplashData: Unsplash[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};
const Presenter = ({ onChange, searchQuery, setSearchQuery, unsplashData }: Props) => {
  if (!unsplashData) return null;
  // useState

  const createUnsplash = () => {
    console.log(unsplashData[0]);
    return unsplashData.map((list, idx) => {
      //log(list);
      return (
        <Card
          style={{ marginBottom: 10, backgroundColor: '#FFF' }}
          elevation={1}
          key={`${list.id}-${idx}`}>
          <Card.Title
            title={list.user.name}
            subtitle={list.user.bio}
            left={props => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(list.links.html);
                }}>
                <Avatar.Image size={40} source={{ uri: list.user.profile_image.large }} />
              </TouchableOpacity>
            )}
          />
          <Card.Content>
            {/* <Avatar source={{ uri: list.user.profile_image.small }} /> */}
            <Paragraph>{list.description}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: list.urls.regular }} />
          <Card.Actions>
            <Button
              onPress={() => {
                Linking.openURL(list.links.download);
              }}>
              Download
            </Button>
            <View style={{ marginLeft: 30, flexDirection: 'row' }}>
              {list.tags.map((tag, idx) => {
                return (
                  <TagButton
                    onPress={() => {
                      setSearchQuery(tag.title);
                    }}>
                    <TagText>{tag.title.toUpperCase()}</TagText>
                  </TagButton>
                );
              })}
            </View>
          </Card.Actions>
        </Card>
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEE' }}>
      <TextInput
        style={{ padding: 10, color: '#FFF', fontSize: 20, backgroundColor: '#000' }}
        defaultValue={searchQuery}
        onSubmitEditing={event => {
          setSearchQuery(event.nativeEvent.text);
        }}
        onChangeText={text => {
          //      setSearchQuery(text);
        }}
      />
      <ScrollView>{createUnsplash()}</ScrollView>
    </SafeAreaView>
  );
};
export default Presenter;

const TagButton = styled.TouchableOpacity`
  font-size: 20;
`;
const TagText = styled.Text`
  padding: 5px 5px;
  color: #111;
  text-decoration: underline;
`;
