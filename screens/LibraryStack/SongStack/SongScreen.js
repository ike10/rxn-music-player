import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MusicItemComponent from '../../../components/MusicItemComponent'
export default function SongScreen({navigation}) {
    return (
        <View style={styles.container}>

            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Currently Playing')}>
                <View style={{height:50,}}>
                        <Text>Press here to go to current playing song</Text>
                </View>
            </TouchableOpacity>
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
                <MusicItemComponent />
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
