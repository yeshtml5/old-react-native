/**
 * unSplash 리스트및 구현
 */
import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { ScrollView, SafeAreaView, TextInput, Linking, View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
  links: {
    download: string;
  };
};
type Props = {
  unsplashData: Unsplash[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  getNextPageContents: () => void;
};
const Presenter = ({ getNextPageContents, searchQuery, setSearchQuery, unsplashData }: Props) => {
  // useRef
  const scrollViewRef = useRef(null);

  // create
  const createUnsplash = () => {
    return unsplashData.map((list, idx) => {
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
            <Paragraph style={{ paddingBottom: 10 }}>{list.description}</Paragraph>
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
                    key={`${tag.title}-${idx}`}
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
      />
      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => {
          const { contentOffset, layoutMeasurement, contentSize } = nativeEvent;
          const marginToBottom = 2 + layoutMeasurement.height;
          if (contentOffset.y + marginToBottom >= contentSize.height) {
            getNextPageContents();
            scrollViewRef.current.scrollTo({ y: 0, animated: false });
          }
        }}>
        {createUnsplash()}
      </ScrollView>
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
  font-size: 10px;
`;
