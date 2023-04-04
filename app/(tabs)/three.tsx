import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

import { PromoItem } from '../../components/PromoItem';
import { Text, View } from '../../components/Themed';

export default function NewsScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [promoList, setPromoList] = useState<any[] | null>(null);

  useEffect(() => {
    fetchPromoList();
  }, []);

  async function fetchPromoList() {
    try {
      const res = await fetch('http://localhost:3000/promo');
      const data = await res.json();
      setPromoList(data.filter((el: any) => !el.hidden));
      setLoading(false);
    } catch (error) {
      setError('Unable to get promo list from server');
    }
  }

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color="#FFA8CF" style={styles.spinner} />
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#FFA8CF" />
      </View>
    );
  }

  return (
    <ScrollView>
      {promoList?.map((promo) => {
        return <PromoItem key={promo.id} promo={promo} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    marginBottom: 40,
  },
  spinner: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
