import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../components/MusicItemComponent'
export default function ArtistScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Your Music</Text>
            </View>
            <ScrollView>
                
            </ScrollView>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});