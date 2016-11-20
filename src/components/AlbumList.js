import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from '../components/AlbumDetail.js';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('Running componentWillMount');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    return (
      this.state.albums.map((album) => {
        return <AlbumDetail key={album.title} album={album} />;
      })
    );
  }
  render() {
    console.log('Render AlbumList: ', this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
