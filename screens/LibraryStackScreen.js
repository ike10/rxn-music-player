import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlbumScreen from './LibraryStack/AlbumScreen'
import SongScreen from './LibraryStack/SongScreen'
import ArtistScreen from './LibraryStack/ArtistScreen'

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
            <Tab.Screen name="Songs" component={SongScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
            <Tab.Screen name="Artists" component={ArtistScreen} />
        </Tab.Navigator>
    );
}



