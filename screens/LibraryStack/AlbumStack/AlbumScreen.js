import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../../components/MusicItemComponent'
export default function AlbumScreen() {
    return (
        <View style={styles.container}>

            <ScrollView>
                <MusicItemComponent />
               
                
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
