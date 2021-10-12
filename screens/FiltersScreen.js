import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default FiltersScreen