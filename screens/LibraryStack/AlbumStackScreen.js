import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../components/MusicItemComponent'
import AlbumScreen from './AlbumStack/AlbumScreen'
import CurrentAlbumScreen from './AlbumStack/CurrentAlbumScreen'


const Stack = createStackNavigator();
export default function AlbumStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={AlbumScreen} />
            <Stack.Screen name="Current Album" component={CurrentAlbumScreen} />
        </Stack.Navigator>
    );
}


