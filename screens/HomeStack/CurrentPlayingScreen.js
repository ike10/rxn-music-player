import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Slider , Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons , AntDesign, Entypo, Feather} from '@expo/vector-icons';
import { MonoText } from '../../components/StyledText';

const iconSize = 30
export default function CurrentlyPlayingScreen() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff' }}>Currently Playing</Text>
                <Text style={{ color: '#fff' }}>From Hollywood's bleeding</Text>
            </View>
            <View style={{ flex: 5, alignItems:'center', justifyContent:'center' }}>
                <View style={{ height:400, width:350, backgroundColor:'#fff'}}>

                </View>
            </View>
            <View style={{ flex: 2, }}>
                <View style={{ flex: 2, display: 'flex', flexDirection: 'row', paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>
                    <View style={{flex: 4, }}>
                        <Text style={{color:'#fff', flex:2}}>Hollywodd's bleeding</Text>
                        <Text style={{ color: '#fff', flex:2 }}>Post Malone</Text>
                    </View>
                    <View>
                        <AntDesign name="like2" color='white' size={30}/>
                    </View>
                </View>
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                    <Slider
                        style={{ flex:1, height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <View style={{ flex: 2, display: 'flex', flexDirection: 'row', paddingLeft: 20, paddingTop: 10, paddingRight: 20, }}>
                    <View style={{ flex: 2,}}>
                        <Entypo name='shuffle' color="white" size={iconSize}/>
                    </View>
                    <View style={{ flex: 2, }}>
                        <AntDesign name='stepbackward' color="white" size={iconSize} />
                    </View>
                    <View style={{ flex: 2, }}>
                        <AntDesign name='play' color="white" size={iconSize} />
                    </View>
                    <View style={{ flex: 2, }}>
                        <AntDesign name="stepforward" color="white" size={iconSize} />
                    </View>
                    <View style={{ flex: 2, }}>
                        <Feather name='repeat' color="white" size={iconSize} />
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
})