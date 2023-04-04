import React from 'react';
import { View, Text } from './Themed';
import { StyleSheet, Image } from 'react-native';

export function CardItem({ item, modifications }: { item: any; modifications: any }) {
  return (
    <View style={styles.ItemCard}>
      <Image source={require('../assets/images/image.png')} style={styles.ItemCardImage}></Image>
      <View style={styles.ItemContent}>
        <Text style={styles.ItemName}>{item.name}</Text>
        <Text style={styles.ItemDescription}>{item.description}</Text>
        <View style={styles.ModificationsContainer}>
          {item.modsList.map((mod: any) => {
            return (
              <View key={mod.modId} style={styles.ItemModification}>
                <Text style={styles.ModificationPrice}>{mod.price}₽</Text>
                <Text style={styles.ModificationVolume}>
                  {modifications.find((modification: any) => modification.id === mod.modId).name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ModificationsContainer: {
    backgroundColor: '#1b1b1b',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  ModificationPrice: {
    fontSize: 20,
  },
  ModificationVolume: {
    fontSize: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ItemModification: {
    backgroundColor: '#2c2c2c',
    marginTop: 'auto',
    padding: 4,
    borderRadius: 4,
    marginRight: 16,
  },
  ItemDescription: {
    fontSize: 11,
    maxWidth: 200,
    marginTop: 8,
  },
  ItemContent: {
    marginLeft: 16,
    backgroundColor: '#1b1b1b',
  },
  ItemCard: {
    flex: 1,
    flexDirection: 'row',
    height: 166,
    backgroundColor: '#1b1b1b',
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 8,
    zIndex: 5,
  },
  ItemCardImage: {
    marginTop: 8,
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 8,
  },
  ItemName: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 16,
  },
});
