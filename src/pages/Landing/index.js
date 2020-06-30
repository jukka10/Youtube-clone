import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import img from '../../assets/youtube-logo.png';

const Landing = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('app');
    }, 1500);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} resizeMode="contain" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: '40%',
    height: '40%',
  },
});
export default Landing;
