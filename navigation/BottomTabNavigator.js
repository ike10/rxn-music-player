import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DiscoverScreen from '../screens/DiscoverScreen'
import LibraryStackScreen from '../screens/LibraryStackScreen'
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
      headerTitle: getHeaderTitle(route),
      headerStyle: {
          backgroundColor: '#070430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
         
      },
 });

  return (
    <BottomTab.Navigator 
        initialRouteName={INITIAL_ROUTE_NAME}
       
        >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />

          <BottomTab.Screen
              name="Discover"
              component={DiscoverScreen}
              options={{
                  title: 'Discover',
                  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-wifi" />,
              }}
          />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
          
          <BottomTab.Screen
              name="Library"
              component={LibraryStackScreen}
              options={{
                  title: 'Library',
                  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
              }}
          />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Search':
      return 'Search';
      case 'Discover':
          return 'Discover';
      case 'Library':
          return 'Library';
  }
}
