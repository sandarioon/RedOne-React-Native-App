import { Entypo } from '@expo/vector-icons'; 
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
  color: string;
}) {
  return <Entypo size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Меню',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Контакты',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Новости',
          tabBarIcon: ({ color }) => <TabBarIcon name="notification" color={color} />,
        }}
      />
    </Tabs>
  );
}
