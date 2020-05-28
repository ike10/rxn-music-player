import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import CurrentlyPlayingScreen from './HomeStack/CurrentPlayingScreen'
import HomeScreen from './HomeStack/HomeScreen'
import MostPlayedScreen from './HomeStack/MostPlayedScreen'
import RecentlyPlayedScreen from './HomeStack/RecentlyPlayedScreen'


const Stack = createStackNavigator();
export default function HomeStackScreen({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerMode:'none',
            headerShown:false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Currently Playing" component={CurrentlyPlayingScreen} />
            <Stack.Screen name="Recently Played" component={MostPlayedScreen} />
            <Stack.Screen name="Most Played" component={RecentlyPlayedScreen} />
        </Stack.Navigator>
    );
}



HomeStackScreen.navigationOptions = {
  header: null,
};


