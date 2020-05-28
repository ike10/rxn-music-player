import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlbumStackScreen from './LibraryStack/AlbumStackScreen'
import SongStackScreen from './LibraryStack/SongStackScreen'
import ArtisteStackScreen from './LibraryStack/ArtisteStackScreen'

const Tab = createMaterialTopTabNavigator();



export default function LibraryStackScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Songs"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'powderblue' },
            }}
        >
            <Tab.Screen name="Songs" component={SongStackScreen} />
            <Tab.Screen name="Album" component={AlbumStackScreen} />
            <Tab.Screen name="Artists" component={ArtisteStackScreen} />
        </Tab.Navigator>
    );
}



