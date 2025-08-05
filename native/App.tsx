import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from './src/screens/FeedScreen';
import StoriesScreen from './src/screens/StoriesScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any;

              if (route.name === 'Feed') {
                iconName = focused ? 'apps' : 'apps-outline';
              } else if (route.name === 'Stories') {
                iconName = focused ? 'play-circle' : 'play-circle-outline';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#3b82f6',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#000',
              borderTopColor: '#333',
            },
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          })}
        >
          <Tab.Screen 
            name="Feed" 
            component={FeedScreen}
            options={{ title: 'Mozaik' }}
          />
          <Tab.Screen 
            name="Stories" 
            component={StoriesScreen}
            options={{ title: 'Stories' }}
          />
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen}
            options={{ title: 'Messages' }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ title: 'Profil' }}
          />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}