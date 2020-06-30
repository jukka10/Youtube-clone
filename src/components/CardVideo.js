import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import {Imagem_url, Image_channel} from '../info.json';

const CardVideo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: Imagem_url}}
        resizeMode="contain"
      />
      <View style={styles.desciption}>
        <Image
          style={styles.channel}
          source={{uri: Image_channel}}
          resizeMode="cover"
        />
        <View style={styles.insiders}>
          <Text numberOfLines={2} style={styles.title}>
            Apenas um exemplo de titulo de video do nosso caro youtube
          </Text>
          <Text numberOfLines={2} style={styles.views}>
            Canal do jukka - 1 mil visualizaçôes - 18 minutos
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: '70%',
  },
  desciption: {
    height: '30%',
    paddingHorizontal: 20,
    backgroundColor: '#282828',
    paddingTop: 10,

    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  insiders: {
    marginLeft: 15,
  },
  channel: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',

    textAlign: 'left',
  },
  views: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'left',
  },
});
export default CardVideo;
