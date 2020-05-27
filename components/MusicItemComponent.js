import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, CheckBox} from 'react-native'
import { Ionicons,FontAwesome5, MaterialIcons } from '@expo/vector-icons';
export default function(){
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                
                <View style={{ flex: 5 , marginLeft:10}}>
                    <Text style={{ marginTop: 10, fontSize: 14, fontWeight: 'bold', color:'#f0f0f7'  }}>Sunflower</Text>
                    <Text style={{ marginTop: 5, fontSize: 12, color: '#808080',  marginLeft:10 }}>Post Malone</Text>
                      
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesome5 name="ellipsis-v" size={15} color="#f0f0f7" />
                </View>  
            </View>
        </TouchableOpacity>
        
    )
}

const styles= StyleSheet.create({
    container:{

        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        backgroundColor: '#000000',

    }
})