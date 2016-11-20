import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card.js';
import CardSection from './CardSection';
import Button from './Button.js';

const AlbumDetail = ({ album }) => {
  console.log('AlbumDetail: ', album);
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContainersStyle, headerTitleStyle, thumbnailStyle, thumbnailContainerStyle, mainImageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContainersStyle}>
          <Text style={headerTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={mainImageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainersStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
     width: 50,
     height: 50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  headerTitleStyle: {
    fontSize: 18,
  }
};

export default AlbumDetail;
