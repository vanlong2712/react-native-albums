// Index.ios.js -- place code in here for android!!!

// Import a library to help create a Component
import React from 'react';
import { View } from 'react-native';
// import { Text } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
