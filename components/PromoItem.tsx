import { StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import React from 'react';

import { View, Text } from './Themed';

export function PromoItem({ promo }: { promo: any }) {
  const router = useRouter();

  function clickHandler() {
    router.replace('/promo');
  }
  return (
    <View style={styles.PromoCard}>
      <Pressable onPress={clickHandler}>
        <Image source={require('../assets/images/image.png')} style={styles.PromoCardImage}></Image>
      </Pressable>
      <Text style={styles.PromoTitle}>{promo.title}</Text>
      <Text style={styles.PromoBody}>{promo.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PromoBody: {
    fontSize: 12,
    margin: 8,
  },
  PromoTitle: {
    fontSize: 18,
    marginTop: 8,
    marginLeft: 8,
  },
  PromoCardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  PromoCard: {
    borderColor: '#444444',
    borderWidth: 2,
    marginTop: 16,
    marginHorizontal: 8,
    backgroundColor: '#1b1b1b',
    borderRadius: 8,
  },
});
