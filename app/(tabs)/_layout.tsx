import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

Feather

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIconStyle: {
            flex: 1
          },
          tabBarIcon: ({ color }) => <AntDesign size={24} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          tabBarIconStyle: {
            flex: 1
          },
          tabBarIcon: ({ color }) => <AntDesign size={24} name="hearto" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIconStyle: {
            flex: 1
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Feather size={24} name="bookmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarIconStyle: {
            flex: 1
          },
          tabBarIcon: ({ color }) => <FontAwesome5 size={22} name="paper-plane" color={color} />,
        }}
      />
    </Tabs>
  );
}
