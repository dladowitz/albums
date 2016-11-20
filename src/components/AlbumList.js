import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: [{ title: 'None' }]
  };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    console.log('componentWillMount - State', this.state);
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      console.log('Http Response: ', response);
      this.setState({ albums: response.data });
      console.log('After http get - State', this.state);
    });
  }

  render() {
    return (
      <View>
        {this.state.albums.map((album) => <Text key={album.title}>{album.title}</Text>)}
      </View>
    );
  }
}

export default AlbumList;
