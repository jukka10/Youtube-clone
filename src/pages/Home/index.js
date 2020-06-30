import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconTV from 'react-native-vector-icons/Feather';

import logo from '../../assets/youtubeLogo.png';
import Card from '../../components/CardVideo';

const Home = () => {
  Icon.loadFont();
  IconTV.loadFont();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image source={logo} resizeMode="contain" />
        <View style={styles.areaInteration}>
          <IconTV name="cast" size={24} color="#fff" />
          <Icon name="video-camera" size={24} color="#fff" />
          <Icon name="search" size={24} color="#fff" />
          <Icon name="user-circle" size={24} color="#fff" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.feed}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  header: {
    width: '100%',
    height: '7%',
    paddingHorizontal: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  areaInteration: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  feed: {
    flex: 1,
  },
});
export default Home;
