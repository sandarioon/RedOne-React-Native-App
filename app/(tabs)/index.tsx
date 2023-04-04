import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, Text, View } from 'react-native';

// import { Text, View } from '../../components/Themed';
import { CardItem } from '../../components/CardItem';

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [menu, setMenu] = useState<{
    categories: any[];
    modifications: any[];
    items: any[];
  } | null>(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    try {
      const data = await fetch('http://localhost:3000/menu');
      setMenu(await data.json());
      setLoading(false);
    } catch (error) {
      setError('Unable to get menu from server');
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
      {menu?.categories.map((category) => {
        return (
          <View key={category.id} style={{ marginTop: 8 }}>
            <Text style={styles.category}>{category.name}</Text>
            {menu?.items
              .filter((item) => item.categoryId === category.id)
              .map((item) => {
                return <CardItem key={item.id} item={item} modifications={menu.modifications} />;
              })}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'column',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginLeft: 16,
    color: '#ffffff'
  },
  itemCard: {
    backgroundColor: 'red',
  },
  itemTitle: {
    color: 'green',
  },
  spinner: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  error: {
    textAlign: 'center',
    marginBottom: 40,
  },
});
