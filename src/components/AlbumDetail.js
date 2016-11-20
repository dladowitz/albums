import React from 'react';
import { Text, } from 'react-native';

import Card from './Card.js';

const AlbumDetail = (props) => {
  // const { viewStyle, viewTitle, viewArtist, viewUrl } = styles;
  console.log('AlbumDetail: ', props);

  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

//
// const styles = {
//   viewStyle: {
//     backgroundColor: '#F8F8F8',
//     marginTop: 10,
//     marginBottom: 10,
//     paddingLeft: 20,
//   },
//   viewTitle: {
//     fontSize: 30,
//   },
//   viewArtist: {
//
//   },
//   viewUrl: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   }
// };

export default AlbumDetail;
