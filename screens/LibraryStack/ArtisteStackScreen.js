import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../components/MusicItemComponent'
import ArtisteScreen from './ArtisteStack/ArtisteScreen'
import CurrentArtisteScreen from './ArtisteStack/CurrentArtisteScreen'


const Stack = createStackNavigator();
export default function ArtisteStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Artiste" component={ArtisteScreen} />
            <Stack.Screen name="Current Artiste" component={CurrentArtisteScreen} />
        </Stack.Navigator>
    );
}



