import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { load } from '@2gis/mapgl';

import { Text, View } from '../../components/Themed';

export default function ContactsScreen() {
  const [coordinates] = useState({
    latitude: 54.727461,
    longitude: 55.953322,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.00421,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Наши контакты:</Text>
      <Text style={styles.address}>Город Уфа,ул. ​Чернышевского, 104</Text>
      <MapView style={styles.mapWrapper} initialRegion={coordinates}>
        <Marker
          key={1}
          coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }}
          centerOffset={{ x: 20, y: 20 }}
          title={'Red One Coffee'}
          description={''}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 20,
    alignItems: 'flex-start',
  },
  mapWrapper: {
    width: '100%',
    height: '90%',
    marginTop: 20,
  },
});
