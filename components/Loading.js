import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading({isVisible, text}) {
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >    
            <View style={styles.view}>
                <ActivityIndicator
                 size="large" 
                 color="#26abe0"
                />
               {
                    text && <Text style={styles.text}>{text}</Text>
               }
            
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay : {
        height:150,
        width: 250,
        backgroundColor: "#fff",
        borderColor: "#b6255f",
        borderWidth:2,
        borderRadius:10
    },
    
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text:{
        color: "#b6255f",
        marginTop: 10,
        fontSize: 15
    }
})

