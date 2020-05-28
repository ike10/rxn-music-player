import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../components/MusicItemComponent'
import SongScreen from './SongStack/SongScreen'



const Stack = createStackNavigator();
export default function SongStackScreen({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName="Songs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Songs" component={SongScreen} />
        </Stack.Navigator>
    );
}



